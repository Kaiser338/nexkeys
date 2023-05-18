from rest_framework import serializers
from .models import Game, Platform, Genre, Publisher, Developer
from .models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password']

class PlatformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platform
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'

class PublisherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publisher
        fields = '__all__'

class DeveloperSerializer(serializers.ModelSerializer):
    class Meta:
        model = Developer
        fields = '__all__'

class GameSerializer(serializers.ModelSerializer):
    platforms = PlatformSerializer(many=True)
    genres = GenreSerializer(many=True)
    publishers = PublisherSerializer(many=True)
    developers = DeveloperSerializer(many=True)

    class Meta:
        model = Game
        fields = ('id', 'gameName', 'date_added', 'description', 'rating', 'release_date', 'platforms', 'genres', 'publishers', 'developers', 'image', 'price', 'discount_price')