from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import User, Book
# from django.contrib.auth.models import User

class BookForm(ModelForm):
    class Meta:
        model = Book
        fields = ['name','author','description','cover_page','category']
