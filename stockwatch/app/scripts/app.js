var app = angular.module('stockDog', ['ngRoute', 'ngResource']);

app.constant('YAHOO_BASE_URL', 'https://query.yahooapis.com/v1/public/yql');

app.config(function($routeProvider) {
    
    $routeProvider.when('/dashboard', {
        templateUrl: 'views/dashboard.html'    
    });
    
    $routeProvider.when('/watchlists/:listId', {
        templateUrl: 'views/watchlists.html'    
    });
    
    $routeProvider.when('/add-watchlist', {
        templateUrl: 'views/add-watchlist.html'
    });
    
    $routeProvider.when('/watchlists/:listId/add-stocks', {
        templateUrl: 'views/add-stocks.html'
    });
    
    $routeProvider.otherwise({
        redirectTo: '/dashboard'    
    });
    
});