from django.db import models


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
    borrowed_by = models.ForeignKey('User', related_name='borrowed_books', null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.name
    
class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    is_admin = models.BooleanField(default=False)
    def __str__(self):
        return self.username