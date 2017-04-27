app.controller('AdminController', function($scope) {
    
    $scope.screens = ['orders', 'products'];
    $scope.current = $scope.screens[0];
    
    $scope.setScreen = function(screenId) {
        $scope.current = $scope.screens[screenId];
    };
    
    $scope.getScreen = function() {
        return 'app/views/' + $scope.current + '.html';
    };
    
});