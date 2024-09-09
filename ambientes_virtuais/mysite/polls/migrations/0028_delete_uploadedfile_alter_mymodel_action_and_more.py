# Generated by Django 5.0.7 on 2024-08-06 17:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0027_mymodel_column4_alter_mymodel_column1_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='UploadedFile',
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='action',
            field=models.CharField(default='Não se aplica', max_length=20),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='column1',
            field=models.CharField(default='default_value', max_length=255),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='column2',
            field=models.TextField(default='default_value', max_length=255),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='column3',
            field=models.TextField(default='default_value', max_length=255),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='column4',
            field=models.TextField(default='Valor padrão'),
        ),
    ]