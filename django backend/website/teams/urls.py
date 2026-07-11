from django.urls import path
from .views import TeamListView, TeamDetailView, TeamFilterView, TeamRegistrationView

urlpatterns = [
    path('register', TeamRegistrationView.as_view(), name='team-register'),
    path('teams', TeamListView.as_view(), name='team-list'),
    path('teams/<int:teamId>', TeamDetailView.as_view(), name='team-detail'),
    path('filter', TeamFilterView.as_view(), name='team-filter'),
]