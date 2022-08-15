from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Empleados.models import Departamento,Empleado, Sueldo
from Empleados.serializers import DepartamentoSerializer,EmpleadoSerializer, SueldoSerializer

from django.core.files.storage import default_storage
# Create your views here.

@csrf_exempt
def departamentoApi(request,id=0):
    if request.method=='GET':
        departamento = Departamento.objects.all()
        departamento_serializer = DepartamentoSerializer(departamento,many=True)
        return JsonResponse(departamento_serializer.data,safe=False)
    elif request.method=='POST':
        departamento_data = JSONParser().parse(request)
        departamento_serializer=DepartamentoSerializer(data=departamento_data)
        if departamento_serializer.is_valid():
            departamento_serializer.save()
            return JsonResponse("Añadido satisfactoriamente",safe=False)
        return JsonResponse("Fallo al añadir: "+str(departamento_serializer.errors.get('DepartamentoNombre')[0]),safe=False)
    elif request.method=='PUT':
        departamento_data=JSONParser().parse(request)
        departamento= Departamento.objects.get(DepartamentoId=departamento_data['DepartamentoId'])
        departamento_serializer = DepartamentoSerializer(departamento,data=departamento_data)
        if departamento_serializer.is_valid():
            departamento_serializer.save()
            return JsonResponse("Actualizado Correctamente",safe=False)
        return JsonResponse("Fallo al actualizar")
    elif request.method=='DELETE':
        departamento = Departamento.objects.get(DepartamentoId=id)
        departamento.delete()
        return JsonResponse("Eliminado satisfactoriamente",safe=False)

@csrf_exempt
def empleadoApi(request,id=0):
    if request.method=='GET':
        empleado = Empleado.objects.all()
        empleado_serializer = EmpleadoSerializer(empleado,many=True)
        return JsonResponse(empleado_serializer.data,safe=False)
    elif request.method=='POST':
        empleado_data = JSONParser().parse(request)
        empleado_serializer=EmpleadoSerializer(data=empleado_data)
        print(empleado_serializer)
        print(empleado_serializer.is_valid())
        if empleado_serializer.is_valid():
            empleado_serializer.save()
            return JsonResponse("Añadido satisfactoriamente",safe=False)
        return JsonResponse("Fallo al añadir",safe=False)
    elif request.method=='PUT':
        empleado_data=JSONParser().parse(request)
        empleado= Empleado.objects.get(EmpleadoId=empleado_data['EmpleadoId'])
        empleado_serializer = EmpleadoSerializer(empleado,data=empleado_data)
        if empleado_serializer.is_valid(raise_exception=True):
            empleado_serializer.save()
            return JsonResponse("Actualizado correctamente",safe=False)
        return JsonResponse("Fallo al actualizar: "+str(empleado_serializer.errors),safe=False)
    elif request.method=='DELETE':
        empleado = Empleado.objects.get(EmpleadoId=id)
        empleado.delete()
        return JsonResponse("Eliminado satisfactoriamente",safe=False)

@csrf_exempt
def GuardarArchivo(request):
    file=request.FILES['file']
    file_name=default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)

@csrf_exempt
def sueldoApi(request):
    if request.method=='GET':
        sueldo = Sueldo.objects.all()
        sueldo_serializer= SueldoSerializer(sueldo,many=True)
        print(sueldo_serializer)
        print(sueldo)
        return JsonResponse(sueldo_serializer.data,safe=False)
    elif request.method=='POST':
        sueldo_data = JSONParser().parse(request)
        sueldo_serializer = SueldoSerializer(data=sueldo_data)
        if sueldo_serializer.is_valid():
            sueldo_serializer.save()
            return JsonResponse("Se ha agregado el sueldo",safe=False)
        return JsonResponse("Ha ocurrido un problema al agregar: "+str(sueldo_serializer.errors.get('Empleado')[0]),safe=False)
    elif request.method=='PUT':
        sueldo_data = JSONParser().parse(request)
        sueldo = Sueldo.objects.get(Empleado=sueldo_data['Empleado'])
        sueldo_serializer = SueldoSerializer(sueldo, data=sueldo_data)
        if sueldo_serializer.is_valid():
            sueldo_serializer.save()
            return JsonResponse("Se ha modificado el sueldo",safe=False)
        else:
            return JsonResponse("Hubo un problema al modificar el sueldo:"+sueldo_serializer.is_valid(raise_exception=True),safe=False)
    elif request.method=='DELETE':
        sueldo = Sueldo.objects.get(Empleado=id)
        sueldo.delete()
        return JsonResponse("Eliminado correctamente",safe=False)


