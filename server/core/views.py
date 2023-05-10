from rest_framework import viewsets
from .models import Game
from .serializers import GameSerializer
# Create your views here.

class GameView(viewsets.ModelViewSet):
    serializer_class = GameSerializer
    queryset = Game.objects.all()