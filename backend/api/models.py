from django.db import models
from apiauth.models import CustomUser


class Category(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='category-image/', blank=True, null=True)

    def __str__(self):
        return self.name

    def get_products(self):
        return Product.objects.filter(category=self)


class Color(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    def get_products(self):
        return Product.objects.filter(color=self)


class Size(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    def get_products(self):
        return Product.objects.filter(size=self)


class Tag(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

    def get_products(self):
        return Product.objects.filter(tags=self)


class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=1000)
    category = models.ManyToManyField(Category)
    tag = models.ManyToManyField(Tag)
    color = models.ManyToManyField(Color)
    size = models.ManyToManyField(Size)
    available = models.BooleanField(default=True)
    trending = models.BooleanField(default=False)
    sale = models.BooleanField(default=False)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to="product-image/")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Review(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.comment
