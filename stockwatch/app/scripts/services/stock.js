app.service('StockService', function ($resource) {
    
    var fetchStocks = function() {
        return localStorage['StockDog.stocks'] ? JSON.parse(localStorage['StockDog.stocks']) : [];
    };
    
    return {
        
        getStocks: function(listId) {
            var stocks = fetchStocks();
            var result = [];

            if(stocks.length) {
                for(var i = 0; i < stocks.length; i++) {
                    if(stocks[i].watchlistId === listId) {
                        result.push(stocks[i]);
                    }
                }
            }
            
            return result;
        },
        
        save: function(data) {
            var stocks = fetchStocks();
            var stockExists = false;
            
            if(stocks.length) {
                for(var i = 0; i < stocks.length; i++) {
                    if(stocks[i].symbol === data.symbol) {
                        stocks[i].shares += data.shares;
                        stockExists = true;
                        break;
                    }
                }
            }
            
            if(!stockExists) {
                stocks.push(data);
            }
            
            localStorage['StockDog.stocks'] = JSON.stringify(stocks);
        },
        
        remove: function(listId) {
            var stocks = fetchStocks();
            var result = [];
            
            if(stocks.length) {
                for(var i = 0; i < stocks.length; i++) {
                    console.log(stocks[i].watchlistId, listId);
                    if(stocks[i].watchlistId != listId) {
                        result.push(stocks[i]);
                    }
                }
            }
            
            localStorage['StockDog.stocks'] = JSON.stringify(result);
        },
        
        query: function() {
            return $resource('companies.json').query();    
        }
        
    };
    
});