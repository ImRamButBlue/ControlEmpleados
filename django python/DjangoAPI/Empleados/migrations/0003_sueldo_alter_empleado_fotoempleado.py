# Generated by Django 4.1 on 2022-08-12 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Empleados', '0002_rename_empleados_empleado'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sueldo',
            fields=[
                ('SueldoId', models.AutoField(primary_key=True, serialize=False)),
                ('SueldoBase', models.PositiveBigIntegerField()),
                ('Descuentos', models.PositiveBigIntegerField()),
                ('Bonificaciones', models.PositiveBigIntegerField()),
                ('SueldoLiquido', models.PositiveBigIntegerField()),
                ('Empleado', models.CharField(max_length=256)),
            ],
        ),
        migrations.AlterField(
            model_name='empleado',
            name='FotoEmpleado',
            field=models.ImageField(upload_to='fotos'),
        ),
    ]
