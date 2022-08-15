from unittest.util import _MAX_LENGTH
from urllib import request
from rest_framework import serializers
from Empleados.models import Departamento,Empleado,Sueldo

class DepartamentoSerializer(serializers.ModelSerializer):
    DepartamentoNombre = serializers.CharField(min_length=2,max_length=256)
    class Meta:
        model=Departamento
        fields=('DepartamentoId','DepartamentoNombre')

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Empleado
        fields=('EmpleadoId','EmpleadoNombre','Departamento','FechaIngreso','FotoEmpleado')

class SueldoSerializer(serializers.ModelSerializer):
    class Meta:
        model=Sueldo
        fields=('SueldoBase','Descuentos','Bonificaciones','SueldoLiquido','Empleado')