from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):

    class Meta(AbstractUser.Meta):
        swappable = 'AUTH_USER_MODEL'
        default_related_name = 'core_user'

    def __str__(self):
        return self.username

class Game(models.Model):
    gameName = models.CharField(max_length=100, unique=True)
    date_added = models.DateField(auto_now_add=True)
    description = models.CharField(max_length=512)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    release_date = models.DateField(default='2020-10-10')
    platforms = models.ManyToManyField('Platform')
    genres = models.ManyToManyField('Genre')
    publishers = models.ManyToManyField('Publisher')
    developers = models.ManyToManyField('Developer')
    image = models.ImageField(upload_to='game_images', default='default_image.jpg')
    price = models.DecimalField(max_digits=8, decimal_places=2, default=10)
    discount_price = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)

    def __str__(self):
        return self.gameName


class Platform(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Genre(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Publisher(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Developer(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name