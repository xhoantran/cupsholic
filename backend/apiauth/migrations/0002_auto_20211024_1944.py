# Generated by Django 3.2.6 on 2021-10-24 19:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apiauth', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='phone_number',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='user_type',
        ),
    ]
