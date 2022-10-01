from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Product
from rest_framework_simplejwt.tokens import RefreshToken

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    #serializing the attribute which are present in the django user Model and changing them based on our use.
    name = serializers.SerializerMethodField(read_only = True)
    _id = serializers.SerializerMethodField(read_only = True)
    isAdmin = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model = User
        fields = ['id','_id', 'username', 'email', 'name', 'isAdmin']
    
    def get__id(self, obj):
        _id = obj.id
        return _id

    def get_isAdmin(self, obj):
        isAdmin = obj.is_staff
        return isAdmin

    ## Using the user model first_name field as our name field, If there is no name we are adding email to the name field.
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        
        return name

    #User serializer for creating a refresh token when ever the user makes changes or updates the profile.
    #This is when the new user registers with the application.
    #creating another token along with the user response.

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = User
        fields = ['id','_id', 'username', 'email', 'name', 'isAdmin', 'token']
    
    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

