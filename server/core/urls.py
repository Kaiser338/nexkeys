from django.urls import path
from . import views
from .views import GameView, PlatformView, GenreView, PublisherView, DeveloperView


urlpatterns = [
    path('game/', GameView.as_view({'get': 'list'})),
    path('game/search/', GameView.as_view({'get': 'search_games'}), name='game-search'),
    path('game/top-rated/', GameView.as_view({'get': 'get_top_rated_games'}), name='game-top-rated'),
    path('game/genre/<str:genreName>/', GameView.as_view({'get': 'get_games_by_genre'}), name='game-by-genre'),
    path('game/<int:pk>/', GameView.as_view({'get': 'retrieve'}), name='game-detail-by-id'),
    path('game/<str:gameName>/', GameView.as_view({'get': 'retrieve_by_name'}), name='game-detail'),
    path('platforms/', PlatformView.as_view({'get': 'list'}), name='platform-list'),
    path('platforms/<str:platformName>/', PlatformView.as_view({'get': 'retrieve_by_name'}), name='platform-detail'),
    path('genres/', GenreView.as_view({'get': 'list'}), name='genre-list'),
    path('genres/<str:genreName>/', GenreView.as_view({'get': 'retrieve_by_name'}), name='genre-detail'),
    path('publishers/', PublisherView.as_view({'get': 'list'}), name='publisher-list'),
    path('publishers/<str:publisherName>/', PublisherView.as_view({'get': 'retrieve_by_name'}), name='publisher-detail'),
    path('developers/', DeveloperView.as_view({'get': 'list'}), name='developer-list'),
    path('developers/<str:developerName>/', DeveloperView.as_view({'get': 'retrieve_by_name'}), name='developer-detail'),
]
