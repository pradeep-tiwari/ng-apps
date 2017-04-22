app.controller('OrdersCtrl', function($scope, $http, $location, cart, ORDERS_URL) {
    
    $scope.sendOrder = function(shippingDetails) {
        var order = angular.copy(shippingDetails);
        order.products = cart.getProducts();
        $http.post(ORDERS_URL, order)
            .success(function(data) {
                console.log(data);
                $scope.data.orderId = data.id;
                cart.getProducts().length = 0;
            })
            .error(function(error) {
                $scope.data.orderError = error; 
            })
            .finally(function() {
                console.log('yep');
                $location.path('/complete');
            });
    };
    
});