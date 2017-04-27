app.service('WatchlistService', function() {
    
    var loadModel = function() {
        var watchlists = [];
        var nextId = 0;
        
        if(localStorage['StockDog.watchlists']) {
            watchlists = JSON.parse(localStorage['StockDog.watchlists']);
        }
        
        if(localStorage['StockDog.nextId']) {
            nextId = parseInt(localStorage['StockDog.nextId']);
        }
        
        return {
            watchlists: watchlists,
            nextId: nextId
        };
    };
    
    
    var saveModel = function() {
        localStorage['StockDog.watchlists'] = JSON.stringify(Model.watchlists);
        localStorage['StockDog.nextId'] = Model.nextId;
    };
    
    var findOne = function(id) {
        Model.watchlists.forEach(function(watchlist) {
            if(watchlist.id === parseInt(id)) {
                return list;
            }
        });
    };
    
    var Model = loadModel();
    
    return {
        
        findAll: function() {
            return Model.watchlists;
        },
        
        save: function(watchlist) {
            watchlist.nextId = Model.nextId++;
            Model.watchlists.push(watchlist);
            saveModel();
        },
        
        remove: function(watchlist) {
            for(var i = 0; i < Model.watchlists.length; i++) {
                if(watchlist.nextId == Model.watchlists[i].nextId) {
                    Model.watchlists.splice(i, 1);
                    break;
                }
            }
        
            saveModel();
        },
        
        exists: function(listId) {
            for(var i = 0; i < Model.watchlists.length; i++) {
                if(listId == Model.watchlists[i].nextId) {
                    return true;
                }
            }
            
            return false;
        }
    };
    
});