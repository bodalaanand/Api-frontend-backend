from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status

from .serializers import LoginSerializer

# Create your views here.


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        if not serializer.is_valid():
            # Grab the first error message so it matches
            # error.response.data.message on the frontend
            first_error = next(iter(serializer.errors.values()))[0]
            return Response(
                {'message': str(first_error)},
                status=status.HTTP_401_UNAUTHORIZED
            )

        user = serializer.validated_data['user']
        tokens = serializer.get_tokens(user)

        return Response(
            {
                'userId': user.userId,
                'role': user.role,
                'token': tokens['token'],
                'refreshToken': tokens['refresh'],
            },
            status=status.HTTP_200_OK
        )