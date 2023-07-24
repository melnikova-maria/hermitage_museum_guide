from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import comment


# Create your views here.

def home(request):
    template = loader.get_template('rooms/main.html')
    context = {}
    return HttpResponse(template.render(context, request))


def about(request):
    template = loader.get_template('rooms/about.html')
    context = {}
    return HttpResponse(template.render(context, request))


def contacts(request):    
    template = loader.get_template('rooms/contacts.html')
    context = {}
    return HttpResponse(template.render(context, request))


def new_hermitage(request):
    # template = loader.get_template('rooms/new_hermitage.html')
    # context = {}
    # return HttpResponse(template.render(context, request))
    if request.method == "POST":
        post = comment()
        post.text = request.POST['text']
        post.save()
        return render(request, 'rooms/new_hermitage.html', {})
    else:
        return render(request, 'rooms/new_hermitage.html', {})


def old_hermitage(request):
    # template = loader.get_template('rooms/old_hermitage.html')
    # context = {}
    # return HttpResponse(template.render(context, request))
    if request.method == "POST":
        post = comment()
        post.text = request.POST['text']
        post.save()
        return render(request, 'rooms/old_hermitage.html', {})
    else:
        return render(request, 'rooms/old_hermitage.html', {})

# эксперимент
def winter_palace(request):
    if request.method == "POST":
        post = comment()
        post.text = request.POST['text']
        post.save()
        return render(request, 'rooms/winter_palace.html', {})
    else:
        return render(request, 'rooms/winter_palace.html', {})