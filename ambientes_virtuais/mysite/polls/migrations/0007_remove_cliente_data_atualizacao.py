# Generated by Django 5.0.7 on 2024-07-23 18:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0006_rename_data_criacao_cliente_data_atualizacao_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cliente',
            name='data_atualizacao',
        ),
    ]
