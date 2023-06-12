from django.urls import path
from .views import register, login, refresh_token, change_username

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('refresh-token/', refresh_token, name='refresh_token'),
    path('change_username/', change_username, name='change_username'),
]