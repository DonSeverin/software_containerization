from unicodedata import name
from django.urls import path
from . import views


app_name = 'blogger_app'
urlpatterns = [
    # Template
    path('blog_get', views.blog_get, name='blog_get'),
    path('blog_post', views.blog_post, name='blog_post'),

]
