todoApp.filter('checkedTodos', function() {

    return function(items, filter) {
        var currentFilter = filter || 'all';
        var result = [];
        
        angular.forEach(items, function(item) {
            if(currentFilter === 'completed' && item.completed === true) {
                result.push(item);
            } else if(currentFilter === 'active' && item.completed === false) {
                result.push(item);
            } else if(currentFilter === 'all') {
                result.push(item);
            }
            
        });
        
        return result;
    };
    
});