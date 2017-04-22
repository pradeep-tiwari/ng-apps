/**
 * Cart Factory
 */
app.factory('cart', function() {
    
    var cartData = [];
    
    return {
        
        addProduct: function(id, title, price) {
            var addedToExistingItem = false;
            
            for(var i = 0; i < cartData.length; i++) {
                if(cartData[i].id === id) {
                    cartData[i].count++;
                    addedToExistingItem = true;
                    break;
                }
            }
            
            if(!addedToExistingItem) {
                cartData.push({
                    id: id,
                    price: price,
                    title: title,
                    count: 1
                });
            }
        },
        
        removeProduct: function(id) {
            for(var i = 0; i < cartData.length; i++) {
                if(cartData[i].id === id) {
                    cartData.splice(i, 1);
                    break;
                }
            }
        },
        
        getProducts: function() {
            return cartData;
        }
    };
    
});


/**
 * Cart Summary
 */
app.directive('cartSummary', function(cart) {
    
    return {
        
        restrict: 'E',
        templateUrl: 'partials/cartSummary.html',
        controller: function($scope) {
            var cartData = cart.getProducts();
            
            $scope.total = function() {
                var total = 0;
                
                for(var i = 0; i < cartData.length; i++) {
                    total += (cartData[i].price * cartData[i].count);
                }
                
                return total;
            };
            
            $scope.itemCount = function() {
                var total = 0;
                
                for(var i = 0; i < cartData.length; i++) {
                    total += cartData[i].count;
                }
                
                return total;
            };
        }
        
    };

});