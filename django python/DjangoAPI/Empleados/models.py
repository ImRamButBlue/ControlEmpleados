from distutils.command.upload import upload
from django.db import models

# Create your models here.

class Departamento(models.Model):
    DepartamentoId = models.AutoField(primary_key=True)
    DepartamentoNombre = models.CharField(max_length=256)

class Empleado(models.Model):
    EmpleadoId = models.AutoField(primary_key=True)
    EmpleadoNombre = models.CharField(max_length=256)
    Departamento = models.CharField(max_length=256)
    FechaIngreso = models.DateField()
    FotoEmpleado = models.CharField(max_length=256)

class Sueldo(models.Model):
    Empleado = models.OneToOneField(Empleado, on_delete=models.CASCADE,primary_key=True)
    SueldoBase = models.PositiveBigIntegerField()
    Descuentos = models.PositiveBigIntegerField()
    Bonificaciones = models.PositiveBigIntegerField()
    SueldoLiquido = models.PositiveBigIntegerField()
    
    