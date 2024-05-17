from django.shortcuts import render, redirect
from .models import Book
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
    letter = request.user.username[0].upper()
    active_tab = 'available'
    books = Book.objects.all()
    return render(request, 'availableBooks.html', {'books':books, 'active_tab': active_tab, 'letter':letter})


def borrowed_books(request):
    letter = request.user.username[0].upper()
    active_tab = 'borrowed'
    return render(request, 'borrowed.html', {'active_tab': active_tab, 'letter':letter})

def book_details(request):
    return render(request, 'book_details.html')

def add_book(request):
    active_tab = 'add_book'
    if request.method=="POST":
        form=BookForm(request.POST, request.FILES) #must add request.FILES when your form contains image input
        if form.is_valid():
            form.save()
            messages.success(request, "Book added successfully!", extra_tags= 'book_added')
            form = BookForm() #to clear the form fields
            return redirect('add_book')
        else:
            print(form.errors)
    else:
        form = BookForm()
        letter = request.user.username[0].upper() if request.user.username else ' '
    return render(request, 'add_book.html', {'form': form, 'active_tab': active_tab, 'letter':letter})

def edit_details(request):
    return render(request, 'admin_details.html')

def admin_page(request):
    active_tab = 'admin_page'
    letter = request.user.username[0].upper()
    books = Book.objects.all()
    return render(request, 'admin.html', {'books':books, 'active_tab':active_tab, 'letter':letter})


