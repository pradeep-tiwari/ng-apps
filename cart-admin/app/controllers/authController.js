app.controller('authController', function($scope, $http, $location, AUTH_URL) {
    
    $scope.authenticate = function(user, pswd) {
        
        $http.post(AUTH_URL, {username: user, password: pswd}, {withCredentials: true})
        .success(function(data) {
            $location.path('/main');
        })
        .error(function(error) {
            $scope.authenticationError = error;
        });
            
    };
    
});