# Generated by Django 5.0.7 on 2024-07-23 18:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0009_alter_cliente_senha'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cliente',
            name='cnpj',
            field=models.CharField(default='00000000000000', max_length=14, unique=True),
        ),
    ]
