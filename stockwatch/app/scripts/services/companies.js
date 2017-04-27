app.service('CompanyService', function($resource) {
    
    return {
        query: function() {
            return $resource('companies.json').query();    
        }
    };
    
});