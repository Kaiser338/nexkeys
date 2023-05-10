from django.db import models

# Create your models here.
class Game(models.Model):
    gameName = models.CharField(max_length=100, unique=True)
    date_added = models.DateField(auto_now_add=True)
    description = models.CharField(max_length=512)
    rating = models.IntegerField()

    def __str__(self):
        return self.gameName