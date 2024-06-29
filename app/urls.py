from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
urlpatterns = [
    path('',views.main, name="main"),
    path('second_main/',views.second_main, name="second_main"),
    path('available_books/',views.available_books, name="available_books"),
    path('borrowed_books/',views.borrowed_books, name="borrowed_books"),
    path('borrow/',views.borrow, name="borrow"),
    path('return_book/',views.return_book, name="return_book"),
    path('book_details/<int:book_id>',views.book_details, name="book_details"),
    path('edit_details/<int:book_id>',views.edit_details, name="edit_details"),
    path('update/',views.update, name="update"),
    path('delete_book/<int:book_id>/',views.delete_book, name="delete_book"),
    # path('delete/',views.delete, name="delete"),
    path('add_book/',views.add_book, name="add_book"),
    path('admin_page/',views.admin_page, name="admin_page"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)