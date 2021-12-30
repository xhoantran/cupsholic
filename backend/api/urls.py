from django.urls import path
from .views import *

urlpatterns = [
    path("products/", ProductList.as_view()),
    path("products/<int:pk>", ProductDetail.as_view()),
    path("categories/", CategoryList.as_view()),
    path("categories/<int:pk>", CategoryDetail.as_view()),
    path("color/", ColorList.as_view()),
    path("color/<int:pk>", ColorDetail.as_view()),
    path("size/", SizeList.as_view()),
    path("size/<int:pk>", SizeDetail.as_view()),
]
