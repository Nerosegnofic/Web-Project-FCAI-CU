from django.contrib.auth.forms import UserCreationForm
from django.utils.translation import gettext, gettext_lazy as _
from django.core.validators import MinLengthValidator
from django import forms
from .models import CustomUser


class RegistrationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ['username','email','password1','password2','isAdmin']
    # def __init__(self, *args, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     #modifying password validation
    #     self.fields['password1'].validators=[]
    #     self.fields['password1'].validators.append(
    #         MinLengthValidator(6, _("The password must be at least 6 characters long."))
    #     )

class LoginForm(forms.Form):
    username = forms.CharField(max_length=150, required=True)
    password = forms.CharField(widget=forms.PasswordInput())
