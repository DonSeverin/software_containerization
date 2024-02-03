from django.shortcuts import render, redirect
import requests

# Create your views here.
def blog_post(request):
    # Log the Host header
    host_header = request.get_host()
    print("Host header received:", host_header)
          
    if request.method == 'POST':
        post_text = request.POST.get('post')
        requests.post('http://blogger-api-service:8081/post/', data={'content': post_text})

    response = requests.get('http://blogger-api-service:8081/post/')
    post = response.json() if response.status_code == 200 else []
    
    return render(request, 'blogger_app/templates/blog_post.html',  {'post': post})