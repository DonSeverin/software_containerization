from django.urls import path
from .views import PostList

urlpatterns = [
    path('post/', PostList.as_view(), name='post-list'),
]
