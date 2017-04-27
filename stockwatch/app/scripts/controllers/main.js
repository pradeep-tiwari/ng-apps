app.controller('MainController', function($scope, $location) {
    
    $scope.$back = function() {
        window.history.back();
    };
    
    $scope.$watch(function() {
        return $location.path();    
    }, function(path) {
        if(path.search('watchlists') !== -1) {
            $scope.activeScreen = 'watchlists';
        } else if(path.search('dashboard') !== -1) {
            $scope.activeScreen = 'dashboard';
        } else {
            $scope.activeScreen = null;
        }
    });
    
});