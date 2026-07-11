import json

from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status

from .models import Team
from .serializers import TeamListSerializer, TeamDetailSerializer, TeamCreateSerializer

# Create your views here.

class TeamRegistrationView(APIView):
    """POST /api/team/register -> public hackathon registration endpoint."""
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        request_payload = request.data.get('request')

        if not request_payload:
            return Response({'message': 'Registration payload is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            if isinstance(request_payload, (bytes, bytearray)):
                payload = json.loads(request_payload.decode('utf-8'))
            else:
                payload = json.loads(request_payload)
        except json.JSONDecodeError:
            return Response({'message': 'Invalid registration payload'}, status=status.HTTP_400_BAD_REQUEST)

        members = payload.get('members', [])
        if not members:
            return Response({'message': 'At least one team member is required'}, status=status.HTTP_400_BAD_REQUEST)

        leader = next((member for member in members if member.get('isLeader')), members[0])
        payload['leaderName'] = leader.get('fullName', '')
        payload['paymentScreenshot'] = request.FILES.get('file')

        serializer = TeamCreateSerializer(data=payload)
        if serializer.is_valid():
            team = serializer.save()
            return Response(
                {'message': 'Registration successful', 'teamId': team.id},
                status=status.HTTP_201_CREATED,
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TeamListView(ListAPIView):
    """GET /api/team/teams  -> plain array of all teams (table view)."""
    queryset = Team.objects.prefetch_related('members').all()
    serializer_class = TeamListSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = None  # frontend expects a raw array, not {results: [...]}


class TeamDetailView(RetrieveAPIView):
    """GET /api/team/teams/<id> -> full team details incl. members."""
    queryset = Team.objects.prefetch_related('members').all()
    serializer_class = TeamDetailSerializer
    permission_classes = [IsAuthenticated]
    lookup_url_kwarg = 'teamId'


class TeamFilterView(APIView):
    """GET /api/team/filter?date=YYYY-MM-DD&slot=Morning|Evening"""
    permission_classes = [IsAuthenticated]

    def get(self, request):
        date = request.query_params.get('date')
        slot = request.query_params.get('slot')

        if not date or not slot:
            return Response(
                {'message': 'Both date and slot query params are required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        teams = Team.objects.prefetch_related('members').filter(
            availableDate=date,
            slotTiming=slot,
        )

        serializer = TeamListSerializer(teams, many=True, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)