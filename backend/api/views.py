from rest_framework import generics, filters
from rest_framework.pagination import PageNumberPagination
from .models import *
from .permissions import *
from .serializers import *


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 20


class ProductList(generics.ListCreateAPIView):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = Product.objects.all().order_by("name")
    serializer_class = ProductSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = [
        "name",
        "category__name",
        "tag__name",
        "color__name",
    ]
    ordering_fields = ["id", "price", "updated_at"]
    ordering = ["id", "name"]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ProductDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class CategoryList(generics.ListCreateAPIView):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = Category.objects.all().order_by("name")
    serializer_class = CategorySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class CategoryProducts(generics.ListAPIView):
    permission_classes = (IsAdminOrReadOnly,)
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_name = self.kwargs["name"]
        category = Category.objects.get(name=category_name)
        return Product.objects.filter(category=category)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class ColorList(generics.ListCreateAPIView):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = Color.objects.all().order_by("name")
    serializer_class = ColorSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class ColorDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = Color.objects.all()
    serializer_class = ColorSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class ColorProducts(generics.ListAPIView):
    permission_classes = (IsAdminOrReadOnly,)
    serializer_class = ProductSerializer

    def get_queryset(self):
        color_name = self.kwargs["name"]
        color = Color.objects.get(name=color_name)
        return Product.objects.filter(color=color)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)


class SizeList(generics.ListCreateAPIView):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = Size.objects.all().order_by("name")
    serializer_class = SizeSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class SizeDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAdminOrReadOnly,)
    queryset = Size.objects.all()
    serializer_class = SizeSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class SizeProducts(generics.ListAPIView):
    permission_classes = (IsAdminOrReadOnly,)
    serializer_class = ProductSerializer

    def get_queryset(self):
        size_name = self.kwargs["name"]
        size = Size.objects.get(name=size_name)
        return Product.objects.filter(sizes=size)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
