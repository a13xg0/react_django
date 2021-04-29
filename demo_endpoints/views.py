from .models import Demo
from .serializers import DemoSerializer
from rest_framework import generics

class DemoListCreate(generics.ListCreateAPIView):
    queryset = Demo.objects.all()
    serializer_class = DemoSerializer

