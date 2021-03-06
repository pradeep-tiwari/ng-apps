app.controller('ProductsController', function($scope, $resource, PRODUCTS_URL) {
    
    $scope.productsResource = $resource(PRODUCTS_URL + ":id", { id: "@id" });
 
    $scope.listProducts = function () {
        $scope.products = $scope.productsResource.query();
    };
 
    $scope.deleteProduct = function (product) {
        product.$delete().then(function () {
            $scope.products.splice($scope.products.indexOf(product), 1);
        });
    };
 
    $scope.createProduct = function (product) {
        new $scope.productsResource(product).$save().then(function (newProduct) {
            $scope.products.push(newProduct);
            $scope.editedProduct = null;
        });
    };
 
    $scope.updateProduct = function (product) {
        product.$save();
        $scope.editedProduct = null;
    };
 
    $scope.startEdit = function (product) {
        $scope.editedProduct = product;
    };
 
    $scope.cancelEdit = function () {
        $scope.editedProduct = null;
    };
 
    $scope.listProducts();
    
});