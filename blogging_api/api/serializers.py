from rest_framework import serializers
from .models import Post

class MyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'content']
