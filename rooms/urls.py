from django.urls import path
from rooms import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('', views.home, name = 'main'),
    path('about/', views.about, name = 'about'),
    path('contacts/', views.contacts, name = 'contacts'),
    path('rooms/new_hermitage', views.new_hermitage, name = 'new_hermitage'),
    path('rooms/old_hermitage', views.old_hermitage, name = 'old_hermitage'),
    path('rooms/winter_palace', views.winter_palace, name = 'winter_palace'),
]

urlpatterns += staticfiles_urlpatterns()