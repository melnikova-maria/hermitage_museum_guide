from django.urls import path
from rooms import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('rooms/', views.rooms, name='rooms'),
]

urlpatterns += staticfiles_urlpatterns()