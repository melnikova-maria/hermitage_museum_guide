from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .forms import UserForm

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


def login(request):
    template = loader.get_template('rooms/login.html')
    context = {}
    return HttpResponse(template.render(context, request))


def new_hermitage(request):
    template = loader.get_template('rooms/new_hermitage.html')
    context = {}
    return HttpResponse(template.render(context, request))


def old_hermitage(request):
    template = loader.get_template('rooms/old_hermitage.html')
    context = {}
    return HttpResponse(template.render(context, request))


def winter_palace(request):
    template = loader.get_template('rooms/winter_palace.html')
    context = {}
    return HttpResponse(template.render(context, request))

# эксперимент
def index(request):
    userform = UserForm()
    return render(request, "rooms/main.html", {"form": userform})