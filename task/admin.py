from django.contrib import admin
from .models import task
from .models import work
# Register your models here.

admin.site.register(task)
admin.site.register(work)