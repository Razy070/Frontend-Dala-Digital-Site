from django.shortcuts import render, redirect
from django.http import HttpRequest, HttpResponse
from django.utils.translation import activate


def homepage(request: HttpRequest) -> HttpResponse:
    return render(request, 'page1.html')


def portfolio(request: HttpRequest) -> HttpResponse:
    return render(request, 'page2.html')


def services(request: HttpRequest) -> HttpResponse:
    return render(request, 'page3.html')


def articles(request: HttpRequest) -> HttpResponse:
    return render(request, 'page5.html', context={'list_': [1, 2, 3, 4, 5, 6]})


def article(request: HttpRequest) -> HttpResponse:
    return render(request, 'page6.html')


def set_language(request, language):
    request.session['django_language'] = language
    activate(language)
    return redirect(request.META.get('HTTP_REFERER'))


def brief(request: HttpRequest) -> HttpResponse:
    return render(request, 'brief-win.html')

