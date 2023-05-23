from django.contrib import admin
from .models import Game, Platform, Publisher, Developer, Genre

class GameAdmin(admin.ModelAdmin):
    list_display = ('gameName', 'description', 'date_added', 'rating')

class PlatformAdmin(admin.ModelAdmin):
    list_display = ('name', 'id')

class PublisherAdmin(admin.ModelAdmin):
    list_display = ('name', 'id')

class DeveloperAdmin(admin.ModelAdmin):
    list_display = ('name', 'id')

class GenreAdmin(admin.ModelAdmin):
    list_display = ('name', 'id')
    
# Register your models here.
admin.site.register(Game, GameAdmin)
admin.site.register(Platform, PlatformAdmin)
admin.site.register(Publisher, PublisherAdmin)
admin.site.register(Developer, DeveloperAdmin)
admin.site.register(Genre, GenreAdmin)