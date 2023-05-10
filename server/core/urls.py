from django.urls import path

from . import views
from .views import GameView

urlpatterns = [
    path('game/', GameView.as_view({'get': 'list'})),
]