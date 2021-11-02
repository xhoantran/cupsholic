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

    def get_queryset(self):
        queryset = Product.objects.all()
        category = self.request.query_params.get("category")
        if category:
            queryset = queryset.filter(category__name=category)
        tag = self.request.query_params.get("tag")
        if tag:
            queryset = queryset.filter(tag__name=tag)
        color = self.request.query_params.get("color")
        if color:
            queryset = queryset.filter(color__name=color)
        bestseller = self.request.query_params.get("bestseller")
        if bestseller:
            queryset = queryset.filter(bestseller=True)
        newarrival = self.request.query_params.get("newarrival")
        if newarrival:
            queryset = queryset.filter(newarrival=True)
        return queryset

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
