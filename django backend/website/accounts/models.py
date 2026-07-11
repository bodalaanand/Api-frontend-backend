from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, userId, password=None, **extra_fields):
        if not userId:
            raise ValueError('Users must have a userId')
        user = self.model(userId=userId, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, userId, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('role', 'ADMIN')
        return self.create_user(userId, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = (
        ('ADMIN', 'Admin'),
        ('HR', 'HR'),
        ('EMPLOYEE', 'Employee'),
    )

    userId = models.CharField(max_length=150, unique=True)
    email = models.EmailField(blank=True, null=True)  # maps to "mailId" from the frontend
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='HR')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'userId'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.userId