from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password
from .serializer import ProductSerializer, UserSerializer, UserSerializerWithToken
from .models import User
from .models import Product
from rest_framework import status
# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # Add custom claims
        serializer = UserSerializerWithToken(self.user).data
        for k,v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes (request):

    routes = [
        'alltheroutes'
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    Products = Product.objects.all()
    serializer = ProductSerializer(Products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id = pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
#since we are using JWT instead of the rest in build authentication, we need to send token to authenticate the user
#this happened when we changed the default authentication settings in the settings.py file.
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data

    user.first_name = data['name']
    user.email = data['email']

    if data['password'] != '':
        user.password = make_password(data['password'])
    
    user.save()
        
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
#since we are using JWT instead of the rest in build authentication, we need to send token to authenticate the user
#this happened when we changed the default authentication settings in the settings.py file.
def userProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    user = User.objects.all()
    serializer = UserSerializer(user, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    
    try:
        user = User.objects.create(
         first_name = data['name'],
        email = data['email'],
        username = data['username'],
        password = make_password(data['password'])
    )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with the user name already exists'}
        return Response(message, status = status.HTTP_400_BAD_REQUEST)
