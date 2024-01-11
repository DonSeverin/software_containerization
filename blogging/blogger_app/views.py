from django.shortcuts import render

# Create your views here.
def blog_post(request):

    context = {}
    return render(request, 'blogger_app/templates/blog_post.html', context)



# Create your views here.
def blog_get(request):

    context = {}
    return render(request, 'blogger_app/templates/blog_get.html', context)