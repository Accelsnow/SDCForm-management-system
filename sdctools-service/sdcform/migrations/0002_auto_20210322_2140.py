# Generated by Django 3.0.7 on 2021-03-23 01:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sdcform', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='choice',
            unique_together={('text', 'sdcquestion')},
        ),
    ]