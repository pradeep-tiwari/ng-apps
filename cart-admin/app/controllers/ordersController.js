app.controller('OrdersController', function($scope, $http, ORDERS_URL) {
    
    $http.get(ORDERS_URL, {withCredentials: true})
        .success(function(data) {
            $scope.orders = data;
        })
        .error(function(error) {
            $scope.error = error;
        });
    
    $scope.selectedOrder = null;
    
    $scope.selectOrder = function(order) {
        $scope.selectedOrder = order;
    };
    
    $scope.calculateTotal = function(order) {
        var total = 0;
        
        for(var i = 0; i < order.products.length; i++) {
            total += order.products[i].count * order.products[i].price;
        }
        
        return total;
    };
    
});