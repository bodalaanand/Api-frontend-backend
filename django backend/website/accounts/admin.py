from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

# Register your models here.


class UserAdmin(BaseUserAdmin):
    model = User
    list_display = ('userId', 'email', 'role', 'is_staff', 'is_active')
    ordering = ('userId',)
    fieldsets = (
        (None, {'fields': ('userId', 'password')}),
        ('Personal info', {'fields': ('email', 'role')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('userId', 'email', 'role', 'password1', 'password2'),
        }),
    )
    search_fields = ('userId', 'email')


admin.site.register(User, UserAdmin)