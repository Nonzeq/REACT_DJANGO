# Generated by Django 4.0.3 on 2022-03-29 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0002_alter_group_options_alter_group_title'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='group',
            options={},
        ),
        migrations.AlterField(
            model_name='group',
            name='title',
            field=models.CharField(max_length=255, verbose_name='Group'),
        ),
    ]