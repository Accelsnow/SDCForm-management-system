# Generated by Django 3.0.7 on 2021-03-23 00:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sdcform', '0001_initial'),
        ('sdcformresponse', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='InvalidInput',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('message', models.TextField()),
                ('sdcquestion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sdcform.SDCQuestion')),
            ],
        ),
    ]
