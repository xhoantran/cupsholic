# Generated by Django 3.2.6 on 2021-11-01 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_trending_product_bestseller'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='newarrival',
            field=models.BooleanField(default=False),
        ),
    ]