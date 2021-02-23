from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
import os

# Create your views here.

def index(*args, **kwargs):
    return HttpResponse("Hello World")

# Create your views here.


# === FORM MANAGER ROUTES ===

@api_view(['POST'])
def upload_sdcform(request):
    if request.method == 'POST':
        return HttpResponse(status=201)
    return HttpResponse(status=201)


@api_view(['GET'])
def sdcform_mock(request):
    print(os.getcwd())
    f = open(os.path.dirname(os.path.realpath(__file__)) + '/sdcform.json', 'r')
    data = json.load(f)
    response = { 
        "message": "",
        "sdcFormObject": data
    }

    f.close()
    return JsonResponse(response, status=200)

