from django.db import models

# Create your models here.


class Group(models.Model):
    title = models.CharField(max_length=255, verbose_name='Group', unique=True)
    description = models.TextField(verbose_name='Descriptions')
    time_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class User(models.Model):
    username = models.CharField(max_length=255, verbose_name='User nickname', unique=True)
    time_created = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    group = models.ForeignKey(Group, on_delete=models.PROTECT, verbose_name='Group')

    def __str__(self):
        return self.username
