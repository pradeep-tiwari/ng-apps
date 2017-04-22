app.filter('unique', function() {
    
    return function(data, key) {
        if(angular.isArray(data) && angular.isString(key)) {
            var results = [];
            var keys = {};
            
            for(var i = 0; i < data.length; i++) {
                var val = data[i][key];
                
                if(angular.isUndefined(keys[val])) {
                    keys[val] = true;
                    results.push(val);
                }
            }

            return results;
        }
        
        return data;
    };
    
});


app.filter('range', function($filter) {
    
    return function(data, page, size) {
        if(angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)) {
            var startIndex = (page-1) * size;
            
            if(data.length < startIndex) {
                return [];  
            } else {
                return $filter('limitTo')(data.splice(startIndex), size);
            }
        } else {
            return data;
        }
    };
    
});

 
app.filter('pageCount', function() {
    
    return function(data, size) {
        if(angular.isArray(data) && angular.isNumber(size)) {
            var result = [];
            
            for(var i = 0; i < Math.ceil(data.length / size); i++) {
                result.push(i);
            }
            
            return result;
        } else {
            return data;
        }
    };
    
});