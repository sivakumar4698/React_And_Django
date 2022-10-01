from django.urls import path
from . import views


urlpatterns = [
    path('token/user/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('', views.getRoutes, name='routes'),
    path('products/', views.getProducts, name='products'),
    path('user/profile/', views.userProfile, name='userProfile'),
    path('products/<str:pk>/', views.getProduct, name='product'),
    path('users/', views.getUsers, name='users'),
    path('user/register/', views.registerUser, name='register'),
    path('user/profile/update/', views.updateUserProfile, name='updateprofile')
]