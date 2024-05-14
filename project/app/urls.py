from django.urls import path
from . import views
urlpatterns = [
    path('',views.main, name="main"),
    path('second_main/',views.second_main, name="second_main"),
    path('available_books/',views.available_books, name="available_books"),
    path('borrowed_books/',views.borrowed_books, name="borrowed_books"),
    path('book_details/',views.book_details, name="book_details"),
    path('sign_up/',views.sign_up, name="sign_up"),
    path('sign_in/',views.sign_in, name="sign_in"),
    path('add_book/',views.add_book, name="add_book"),
    path('edit_details/',views.edit_details, name="edit_details"),
    path('admin_page/',views.admin_page, name="admin_page"),
]