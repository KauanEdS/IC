# Generated by Django 5.0.7 on 2024-08-07 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0039_alter_mymodel_column1_alter_mymodel_column2_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mymodel',
            name='action',
            field=models.CharField(default='Não se aplica', max_length=20),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='column1',
            field=models.TextField(default='default_value', max_length=1000),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='column2',
            field=models.TextField(default='default_value', max_length=1000),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='column3',
            field=models.TextField(default='default_value', max_length=1000),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='column4',
            field=models.TextField(default='default_value', max_length=1000),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='column5',
            field=models.TextField(default='default_value', max_length=1000),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='column6',
            field=models.TextField(default='default_value', max_length=1000),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='column7',
            field=models.TextField(default='default_value', max_length=1000),
        ),
        migrations.AlterField(
            model_name='mymodel',
            name='column8',
            field=models.TextField(default='default_value', max_length=1000),
        ),
    ]
