from rest_framework import generics
from .models import Post
from .serializers import MyModelSerializer


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = MyModelSerializer
