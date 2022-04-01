
from .models import *
from rest_framework import generics ,serializers

from .serializers import *
from django.shortcuts import render

# Create your views here.


class UsersDeleteUpdateApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer


class UsersListApiView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UsersSerializer


class GroupsApiView(generics.ListCreateAPIView):
    """Groups list"""
    queryset = Group.objects.all().values('id', 'title', 'description', 'time_created')
    serializer_class = GroupsSerializser

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class GroupsDeleteUpdateApiView(generics.RetrieveUpdateDestroyAPIView):
    """Groups delete, update """
    queryset = Group.objects.all()
    serializer_class = GroupsSerializser