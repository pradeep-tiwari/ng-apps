app.config(function($routeProvider) {
    
    $routeProvider.when('/checkout', {
        templateUrl: 'partials/checkoutSummary.html'    
    });
    
    $routeProvider.when('/complete', {
        templateUrl: 'partials/thankYou.html'    
    });
    
    $routeProvider.when('/placeorder', {
        templateUrl: 'partials/placeOrder.html'    
    });
    
    $routeProvider.otherwise({
        templateUrl: 'partials/home.html'    
    });
    
});