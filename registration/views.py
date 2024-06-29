from django.shortcuts import render, redirect
from .models import CustomUser
from .forms import RegistrationForm, LoginForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
# Create your views here.

def sign_up(request):
    if request.method=="POST":
        form=RegistrationForm(request.POST)
        if form.is_valid():
            user=form.save()
            is_admin=form.cleaned_data.get('isAdmin')
            username=form.cleaned_data.get('username')
            password=form.cleaned_data.get('password1')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, "Account created successfully!", extra_tags= 'success')
                if is_admin:
                    return redirect('admin_page')
                else:
                    return redirect('available_books')
        else:
            form_errors = form.errors.as_json()
            print(form.errors)
            messages.error(request, "Account creation was unsuccessful!", extra_tags= 'unsuccess')
            return render(request, 'signup_page.html',{'form':form, 'form_errors':form_errors})
    form = RegistrationForm()
    return render(request, 'signup_page.html',{'form':form})

def sign_in(request):
    form=LoginForm(request.POST or None)
    if request.method=="POST":
        #bind the form to the post data or leave the form unbound if there's no post data
        if form.is_valid():
            username=form.cleaned_data.get('username')
            password=form.cleaned_data.get('password')
            user=authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, "Welcome Back!", extra_tags= 'success')
                if user.isAdmin:
                    return redirect('admin_page')
                else:
                    return redirect('available_books')
            else:
                print(form.errors)
                messages.error(request, "Invalid Credentials", extra_tags= 'unsuccess')
    return render(request, 'signin_page.html', {'form':form})

def logout_view(request):
    logout(request)
    return redirect('main')