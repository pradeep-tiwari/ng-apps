var app = angular.module('cartAdmin', ['ngRoute', 'ngResource']);

app.constant('AUTH_URL', 'http://localhost:2403/users/');
app.constant('ORDERS_URL', 'http://localhost:2403/orders/');
app.constant('PRODUCTS_URL', 'http://localhost:2403/products/');

app.config(function($routeProvider) {
    
    $routeProvider.when('/login', {
        templateUrl: 'app/views/login.html'
    });
    
    $routeProvider.when('/main', {
        templateUrl: 'app/views/main.html'    
    });
    
    $routeProvider.otherwise({
        redirectTo: '/login'    
    });

});