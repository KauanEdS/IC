# Generated by Django 5.0.7 on 2024-08-12 18:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0047_tabelascliente_remove_mymodel_acao'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='TabelasCliente',
            new_name='ActionModel',
        ),
    ]