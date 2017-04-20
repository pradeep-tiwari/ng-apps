todoApp.controller('ToDoCtrl', function($scope) {
    
    $scope.todos = model;
    
    $scope.shouldUnderline = function(completed) {
        return completed ? 'todoLineThrough' : '';
    };
    
    $scope.shouldMarkAsCompleted = function(id) {
        $scope.todos.shouldMarkAsCompleted(id);
    };

    $scope.shouldSetLabelActive = function(labelValue, currentFilter) {
        currentFilter = currentFilter || 'all';
        return currentFilter === labelValue ? 'labelActive' : '';
    };
    
    $scope.isComplete = function(id) {
        return $scope.todos.isComplete(id);
    };
    
    $scope.addToDo = function(title) {
        if($scope.todoTitle.trim()) {
            $scope.todos.add(title);
            $scope.todoTitle = '';    
        }
    };
    
    $scope.removeToDo = function(id) {
        $scope.todos.remove(id);
    };
    
    $scope.clearCompleted = function() {
        $scope.todos.clearCompleted();
    };
    
}); 