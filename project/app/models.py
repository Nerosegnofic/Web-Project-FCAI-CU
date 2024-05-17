from django.db import models
from registration.models import CustomUser


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Book(models.Model):
    book_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    is_available = models.BooleanField(default=True)
    description = models.TextField()
    cover_page = models.ImageField(upload_to='img/')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    borrowed_by = models.ForeignKey(CustomUser, related_name='borrowed_books', null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.name
    
