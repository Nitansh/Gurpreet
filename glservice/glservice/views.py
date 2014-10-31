from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request, 'gllaunch/index.html')

def mulli_home(request):
	return render(request, 'gllaunch/mulli.html')