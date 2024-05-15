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
    active_tab = 'second_main'
    recommended = Book.objects.all()[:7]
    best = Book.objects.all()[:5]
    return render(request, 'second_main.html', {'active_tab': active_tab, 'recommended':recommended, 'best': best})

def available_books(request):
    active_tab = 'available'
    books = Book.objects.all()
    return render(request, 'availableBooks.html', {'books':books, 'active_tab': active_tab})


def borrowed_books(request):
    active_tab = 'borrowed'
    return render(request, 'borrowed.html', {'active_tab': active_tab})

def book_details(request):
    return render(request, 'book_details.html')

def sign_in(request):
    return render(request, 'signin_page.html')

def add_book(request):
    active_tab = 'add_book'
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
    return render(request, 'add_book.html', {'form': form, 'active_tab': active_tab})

def edit_details(request):
    return render(request, 'admin_details.html')

def admin_page(request):
    active_tab = 'admin_page'
    books = Book.objects.all()
    return render(request, 'admin.html', {'books':books, 'active_tab':active_tab})

def sign_up(request):
    return render(request, 'signup_page.html')

def sign_in(request):
    return render(request, 'signin_page.html')
