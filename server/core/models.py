from django.db import models

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


class Game(models.Model):
    gameName = models.CharField(max_length=100, unique=True)
    date_added = models.DateField(auto_now_add=True)
    description = models.CharField(max_length=512)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    release_date = models.DateField(default='2020-10-10')
    image = models.ImageField(upload_to='game_images', default='default_image.jpg')
    price = models.DecimalField(max_digits=8, decimal_places=2, default=10)
    discount_price = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    platforms = models.ManyToManyField(Platform)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)

    def __str__(self):
        return self.gameName

