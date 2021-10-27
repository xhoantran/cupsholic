from django.core.validators import EmailValidator
from rest_framework import serializers
from django_restql.mixins import DynamicFieldsMixin
from .models import *


class UserSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["id", "email", "first_name", "last_name"]
        extra_kwargs = {
            "email": {"validators": [EmailValidator]},
        }


class CategorySerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class ColorSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = ["id", "name"]


class SizeSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ["id", "name"]


class TagSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "name"]


class ProductSerializer(DynamicFieldsMixin, serializers.ModelSerializer):
    category = CategorySerializer(many=True, required=False)
    tag = TagSerializer(many=True, required=False)
    color = ColorSerializer(many=True, required=False)
    size = SizeSerializer(many=True, required=False)

    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "description",
            "price",
            "category",
            "tag",
            "color",
            "size",
        ]

    def get_or_create_category(self, category_list):
        package_ids = []
        for category in category_list:
            category_obj, created = Category.objects.get_or_create(
                name=category["name"]
            )
            package_ids.append(category_obj.id)
        return package_ids

    def get_or_create_tag(self, tag_list):
        tag_ids = []
        for tag in tag_list:
            tag_obj, created = Tag.objects.get_or_create(name=tag["name"])
            tag_ids.append(tag_obj.id)
        return tag_ids

    def get_or_create_color(self, color_list):
        color_ids = []
        for color in color_list:
            color_obj, created = Color.objects.get_or_create(
                name=color["name"])
            color_ids.append(color_obj.id)
        return color_ids

    def get_or_create_size(self, size_list):
        size_ids = []
        for size in size_list:
            size_obj, created = Size.objects.get_or_create(name=size["name"])
            size_ids.append(size_obj.id)
        return size_ids

    def create(self, validated_data):
        category_list = validated_data.pop("category")
        tag_list = validated_data.pop("tag")
        color_list = validated_data.pop("color")
        size_list = validated_data.pop("size")
        product = Product.objects.create(**validated_data)
        product.category.set(self.get_or_create_category(category_list))
        product.tag.set(self.get_or_create_tag(tag_list))
        product.color.set(self.get_or_create_color(color_list))
        product.size.set(self.get_or_create_size(size_list))
        return product

    def update(self, instance, validated_data):
        category_list = validated_data.pop("category")
        tag_list = validated_data.pop("tag")
        color_list = validated_data.pop("color")
        size_list = validated_data.pop("size")
        instance.name = validated_data.get("name", instance.name)
        instance.description = validated_data.get(
            "description", instance.description)
        instance.price = validated_data.get("price", instance.price)
        instance.image = validated_data.get("image", instance.image)
        instance.save()
        instance.category.set(self.get_or_create_category(category_list))
        instance.tag.set(self.get_or_create_tag(tag_list))
        instance.color.set(self.get_or_create_color(color_list))
        instance.size.set(self.get_or_create_size(size_list))
        return instance
