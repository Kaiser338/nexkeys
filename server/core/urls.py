from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views
from .views import GameView, RegisterView, LoginView, PlatformView, GenreView, PublisherView, DeveloperView
from .views import RegisterView, LoginView


urlpatterns = [
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    path('game/', GameView.as_view({'get': 'list'})),
    path('game/<str:gameName>/', GameView.as_view({'get': 'retrieve_by_name'})),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('platforms/', PlatformView.as_view({'get': 'list'}), name='platform-list'),
    path('platforms/<str:platformName>/', PlatformView.as_view({'get': 'retrieve_by_name'}), name='platform-detail'),
    path('genres/', GenreView.as_view({'get': 'list'}), name='genre-list'),
    path('genres/<str:genreName>/', GenreView.as_view({'get': 'retrieve_by_name'}), name='genre-detail'),
    path('publishers/', PublisherView.as_view({'get': 'list'}), name='publisher-list'),
    path('publishers/<str:publisherName>/', PublisherView.as_view({'get': 'retrieve_by_name'}), name='publisher-detail'),
    path('developers/', DeveloperView.as_view({'get': 'list'}), name='developer-list'),
    path('developers/<str:developerName>/', DeveloperView.as_view({'get': 'retrieve_by_name'}), name='developer-detail'),
]