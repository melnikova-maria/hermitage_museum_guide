from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.

def rooms(request):
    template = loader.get_template('rooms_video.html')
    return HttpResponse(template.render())