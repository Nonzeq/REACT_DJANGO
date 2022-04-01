from django.contrib import admin
from django.urls import path,include

from Api.views import *

urlpatterns = [
    path('api/v1/usersList', UsersListApiView.as_view()),
    path('api/v1/usersList/<int:pk>/', UsersDeleteUpdateApiView.as_view()),
    path('api/v1/groupsList', GroupsApiView.as_view()),
    path('api/v1/groupsList/<int:pk>/', GroupsDeleteUpdateApiView.as_view()),
]