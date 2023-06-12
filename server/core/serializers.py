from rest_framework import serializers
from .models import Game, Platform, Genre, Publisher, Developer

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
    genre = GenreSerializer()

    class Meta:
        model = Game
        fields = ('id', 'gameName', 'date_added', 'description', 'rating', 'release_date', 'image', 'price', 'discount_price', 'platforms', 'genre')
