from django.db import models

# Create your models here.

class comment(models.Model):
    text = models.TextField()