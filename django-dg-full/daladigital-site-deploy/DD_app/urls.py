from django.urls import path
from . import views
from django.utils.translation import gettext_lazy as _


urlpatterns = [
    path(_(''), views.homepage, name='homepage'),
    path(_('portfolio/'), views.portfolio, name='portfolio'),
    path(_('services/'), views.services, name='services'),
    path(_('articles/'), views.articles, name='articles'),
    path(_('articles/detailed'), views.article, name='article'),
    path(_('brief/'), views.brief, name='brief'),
    path('ru/', views.set_language, {'language': 'ru'}, name='set_language_ru'),
    path('en/', views.set_language, {'language': 'en'}, name='set_language_en'),
]