from django.contrib import admin

# Register your models here.
from .models import *


class UserAdmin(admin.ModelAdmin):
    list_display = ['id', 'username', 'time_created', 'group']
    list_display_links = ('id', 'username')
    search_fields = ('username',)
    list_filter = ('time_created',)


class GroupAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'time_created',]
    list_display_links = ('id', 'title',)
    search_fields = ('title',)
    list_filter = ('time_created',)

admin.site.register(User, UserAdmin)
admin.site.register(Group, GroupAdmin)