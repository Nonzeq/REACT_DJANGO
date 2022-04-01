from rest_framework import serializers

from .models import *


class UsersSerializer(serializers.ModelSerializer):
    group_name = serializers.CharField(source='group.title', read_only=True)

    class Meta:
        model = User
        fields = ('id','username', 'time_created', 'group_name' ,'group')


class GroupsSerializser(serializers.ModelSerializer):

    class Meta:
        model = Group
        fields = ('id', 'title', 'description', 'time_created')