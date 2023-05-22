from rest_framework import viewsets
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer
from rest_framework import generics
from django.shortcuts import get_object_or_404
from .models import Game, Platform, Genre, Publisher, Developer
from .serializers import GameSerializer, PlatformSerializer, GenreSerializer, PublisherSerializer, DeveloperSerializer
from django.db.models import Q

# Create your views here.

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = Token.objects.create(user=user)
            return Response({'token': token.key})
        return Response(serializer.errors, status=400)

class LoginView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['username']
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        return Response(serializer.errors, status=400)



class GameView(viewsets.ViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

    def retrieve_by_name(self, request, gameName=None):
        instance = get_object_or_404(self.queryset, gameName=gameName)
        serializer = self.serializer_class(instance)
        return Response(serializer.data)

    def list(self, request):
        search_query = request.query_params.get('search', '')
        queryset = self.queryset.filter(
            Q(gameName__icontains=search_query) | Q(description__icontains=search_query)
        )
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
    

    def get_top_rated_games(self, request):
        num_games = request.query_params.get('num_games', 5) 

        try:
            num_games = int(num_games)
            if num_games <= 0:
                raise ValueError("Invalid value for 'num_games'.")
        except ValueError:
            return Response({'error': "Invalid value for 'num_games'. Must be a positive integer."},
                            status=status.HTTP_400_BAD_REQUEST)

        queryset = self.queryset.order_by('-rating')[:num_games]
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

    def get_games_by_genre(self, request, genre_name=None):
        num_games = request.GET.get('num_games')
        try:
            if num_games:
                num_games = int(num_games)
                if num_games <= 0:
                    raise ValueError("Invalid value for 'num_games'.")
        except ValueError:
            return Response({'error': "Invalid value for 'num_games'. Must be a positive integer."},
                            status=status.HTTP_400_BAD_REQUEST)

        queryset = Game.objects.filter(genres__name__icontains=genre_name)
        if num_games:
            queryset = queryset[:num_games]
        
        serializer = GameSerializer(queryset, many=True)
        return Response(serializer.data)


class PlatformView(viewsets.ModelViewSet):
    queryset = Platform.objects.all()
    serializer_class = PlatformSerializer

    def retrieve_by_name(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

class GenreView(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

    def retrieve_by_name(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

class PublisherView(viewsets.ModelViewSet):
    queryset = Publisher.objects.all()
    serializer_class = PublisherSerializer

    def retrieve_by_name(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

class DeveloperView(viewsets.ModelViewSet):
    queryset = Developer.objects.all()
    serializer_class = DeveloperSerializer

    def retrieve_by_name(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)