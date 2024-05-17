from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
urlpatterns = [
    path('sign_up/',views.sign_up, name="sign_up"),
    path('sign_in/',views.sign_in, name="sign_in"),
    path('logout/',views.logout_view, name='logout')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
