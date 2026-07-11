from django.contrib import admin
from .models import Team, TeamMember

# Register your models here.



class TeamMemberInline(admin.TabularInline):
    model = TeamMember
    extra = 1


@admin.register(Team)
class TeamAdmin(admin.ModelAdmin):
    list_display = ('teamName', 'leaderName', 'preferredDomain', 'availableDate', 'slotTiming')
    list_filter = ('availableDate', 'slotTiming', 'preferredDomain')
    search_fields = ('teamName', 'leaderName')
    inlines = [TeamMemberInline]


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('fullName', 'team', 'emailId', 'isLeader')