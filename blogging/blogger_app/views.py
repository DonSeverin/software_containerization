from django.shortcuts import render
from .models import Post
from django.http import HttpResponseRedirect


# Create your views here.
def blog_post(request):
    if request.method == "POST":
        content = request.POST.get('content')
        Post.objects.create(content=content)
        return HttpResponseRedirect('blog_get')

    context = {}
    return render(request, 'blogger_app/templates/blog_post.html', context)



# Create your views here.
def blog_get(request):
    post = Post.objects.all()

    
    return render(request, 'blogger_app/templates/blog_get.html',  {'post': post})