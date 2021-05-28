from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("<em>My Second App</em>")

def help(request):
    my_dict = {'key': "Help Page"}
    return render(request, "AppTwo/help.html", context=my_dict)
    #  return render(request, 'first_app/index.html', context=my_dict)