app.controller('BooksCtrl', function($scope, $http, cart, DATA_URL, ACTIVE_CATEGORY_CLASS, ACTIVE_PAGE_CLASS, PER_PAGE_COUNT) {
    
    var selectedCategory = '';
    
    $scope.data = {};
    
    $http.get(DATA_URL)
        .success(function(data) {
            $scope.data.products = data;
        })
        .error(function(error) {
            $scope.data.error = error;    
        });
    
    $scope.data.products = fakeProducts;
    $scope.selectedPage = 1;
    $scope.pageSize = PER_PAGE_COUNT;
    
    $scope.selectCategory = function(category) {
        selectedCategory = category;
        $scope.selectedPage = 1;
    };
    
    $scope.selectPage = function(pageNumber) {
        $scope.selectedPage = pageNumber;
    };
    
    $scope.categoryFilterFn = function(product) {
        return selectedCategory === '' || product.category === selectedCategory;
    };
    
    $scope.getCategoryClass = function(category) {
        return selectedCategory === category ? ACTIVE_CATEGORY_CLASS : '';
    };
    
    $scope.getPageClass = function(page) {
        return $scope.selectedPage === page ? ACTIVE_PAGE_CLASS : '';
    };
    
    $scope.addProductToCart = function(product) {
        cart.addProduct(product.id, product.title, product.price);
    };
    
});