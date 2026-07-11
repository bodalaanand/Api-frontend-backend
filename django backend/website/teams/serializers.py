from rest_framework import serializers
from .models import Team, TeamMember


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ['fullName', 'emailId', 'mobileNumber', 'yearOfStudy', 'department', 'isLeader']


class TeamCreateSerializer(serializers.ModelSerializer):
    members = TeamMemberSerializer(many=True)

    class Meta:
        model = Team
        fields = [
            'teamName', 'leaderName', 'preferredDomain', 'ideaDescription',
            'availableDate', 'slotTiming', 'registrationFee', 'paymentDate',
            'utrNumber', 'paymentScreenshot', 'rulesAccepted', 'mediaConsent',
            'technicalSkills', 'members'
        ]

    def create(self, validated_data):
        members_data = validated_data.pop('members', [])
        team = Team.objects.create(**validated_data)

        for member_data in members_data:
            TeamMember.objects.create(team=team, **member_data)

        return team


class TeamListSerializer(serializers.ModelSerializer):
    """Lightweight shape used by the registrations table."""
    teamId = serializers.IntegerField(source='id')
    paymentScreenshotUrl = serializers.SerializerMethodField()

    class Meta:
        model = Team
        fields = [
            'teamId', 'teamName', 'leaderName', 'preferredDomain',
            'availableDate', 'slotTiming', 'paymentScreenshotUrl',
        ]

    def get_paymentScreenshotUrl(self, obj):
        request = self.context.get('request')
        if obj.paymentScreenshot and request:
            return request.build_absolute_uri(obj.paymentScreenshot.url)
        return None


class TeamDetailSerializer(serializers.ModelSerializer):
    """Full shape used by the team details modal."""
    teamId = serializers.IntegerField(source='id')
    paymentScreenshotUrl = serializers.SerializerMethodField()
    members = TeamMemberSerializer(many=True, read_only=True)

    class Meta:
        model = Team
        fields = [
            'teamId', 'teamName', 'leaderName', 'preferredDomain', 'ideaDescription',
            'availableDate', 'slotTiming',
            'registrationFee', 'paymentDate', 'utrNumber', 'paymentScreenshotUrl',
            'rulesAccepted', 'mediaConsent', 'technicalSkills',
            'members',
        ]

    def get_paymentScreenshotUrl(self, obj):
        request = self.context.get('request')
        if obj.paymentScreenshot and request:
            return request.build_absolute_uri(obj.paymentScreenshot.url)
        return None