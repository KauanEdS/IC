# Generated by Django 5.0.7 on 2024-07-23 20:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0010_alter_cliente_cnpj'),
    ]

    operations = [
        migrations.AddField(
            model_name='cliente',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]