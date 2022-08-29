from django.urls import re_path as url
from Empleados import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^departamento$',views.departamentoApi),
    url(r'^departamento/([0-9]+)$',views.departamentoApi),

    url(r'^empleado$', views.empleadoApi),
    url(r'^empleado/([0-9]+)$', views.empleadoApi),
    url(r'^empleado/guardararchivo', views.GuardarArchivo),

    url(r'^sueldo$', views.sueldoApi),
    url(r'^sueldo/([0-9]+)$', views.sueldoApi)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)