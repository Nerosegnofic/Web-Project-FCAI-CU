from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class CustomUser(AbstractUser):
    isAdmin = models.BooleanField('Is Admin', default=False)











    # class Role(models.TextChoices):
    #     ADMIN = "ADMIN", 'Admin'
    #     STUDENT = "STUDENT", 'Student'
    # base_role = Role.STUDENT
    # role = models.CharField(max_length=10, choices=Role.choices)
    # def save(self, *args, **kwargs):
    #     if not self.pk:
    #         self.role = self.base_role
    #         return super().save(*args, **kwargs)