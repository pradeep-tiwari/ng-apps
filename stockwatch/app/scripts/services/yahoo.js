app.service('YahooService', function($http, YAHOO_BASE_URL) {
    
    var stocks = [];
    
    return {
        fetch: function() {
            var symbols = [];
            var query = encodeURIComponent('select * from yahoo.finance.quotes where symbol in ("YHOO", "GOOG", "AAPL", "MSFT")');
            var url = YAHOO_BASE_URL + '?q=' + query + '&format=json&diagnostics=true&env=http://datatables.org/alltables.env&callback=JSON_CALLBACK';
            
            $http.jsonp(url)
            .success(function(data) {
                console.log(data);
                if(data.query.count) {
                    var quotes = (data.query,count > 1) ? data.query.results.quote : [data.query.results.quote];
                    console.log(quotes); 
                }
            })
            .error(function(data) {
                console.log(data);
            });
        }
    };

});