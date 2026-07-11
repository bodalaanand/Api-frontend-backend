from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken


class LoginSerializer(serializers.Serializer):
    userId = serializers.CharField()
    password = serializers.CharField(write_only=True)
    mailId = serializers.CharField(required=False, allow_blank=True)

    def validate(self, attrs):
        userId = attrs.get('userId')
        password = attrs.get('password')

        # Django's authenticate() uses USERNAME_FIELD under the hood,
        # so this checks userId + password against the hashed password.
        user = authenticate(username=userId, password=password)

        if user is None:
            raise serializers.ValidationError('Invalid credentials')

        if not user.is_active:
            raise serializers.ValidationError('This account has been disabled')

        attrs['user'] = user
        return attrs

    def get_tokens(self, user):
        refresh = RefreshToken.for_user(user)
        return {
            'token': str(refresh.access_token),
            'refresh': str(refresh),
        }