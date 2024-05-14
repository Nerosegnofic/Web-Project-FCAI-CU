from django.shortcuts import render, redirect
from .models import User, Book, Category
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login
from .forms import BookForm
from django.contrib import messages

def main(request):
    return render(request,'main.html')

def second_main(request):
    return render(request, 'second_main.html')

def available_books(request):
    books = Book.objects.all()
    return render(request, 'availableBooks.html', {'books':books})


def borrowed_books(request):
    return render(request, 'borrowed.html')

def book_details(request):
    return render(request, 'book_details.html')

def sign_in(request):
    return render(request, 'signin_page.html')

def add_book(request):
    if request.method=="POST":
        form=BookForm(request.POST, request.FILES) #must add request.FILES when your form contains image input
        if form.is_valid():
            form.save()
            messages.success(request, "Book added successfully!", extra_tags= 'book_added')
            form = BookForm() #to clear the form fields
            # return redirect('available_books')
        else:
            print(form.errors)
    else:
        form = BookForm()
    context={'form':form}
    return render(request, 'add_book.html', context)




def edit_details(request):
    return render(request, 'admin_details.html')

def admin_page(request):
    books = Book.objects.all()
    return render(request, 'admin.html', {'books':books})

def sign_up(request):
    return render(request, 'signup_page.html')

def sign_in(request):
    return render(request, 'signin_page.html')
