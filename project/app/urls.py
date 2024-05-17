from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
urlpatterns = [
    path('',views.main, name="main"),
    path('second_main/',views.second_main, name="second_main"),
    path('available_books/',views.available_books, name="available_books"),
    path('borrowed_books/',views.borrowed_books, name="borrowed_books"),
    path('book_details/',views.book_details, name="book_details"),
    path('add_book/',views.add_book, name="add_book"),
    path('edit_details/',views.edit_details, name="edit_details"),
    path('admin_page/',views.admin_page, name="admin_page"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)