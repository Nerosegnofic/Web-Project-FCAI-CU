from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class CustomUser(AbstractUser):
    isAdmin = models.BooleanField('Is Admin', default=False)

