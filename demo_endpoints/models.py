from django.db import models

# Create your models here.

from django.db import models

class Demo(models.Model):
    name = models.CharField(max_length=100)

