from django.urls import path
from . import views

urlpatterns = [
    path('api/demo/', views.DemoListCreate.as_view() ),
]

