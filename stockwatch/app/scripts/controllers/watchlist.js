app.controller('WatchlistController', function($scope, $location, $routeParams, WatchlistService, StockService, CompanyService, YahooService) {
    
    $scope.watchlists = WatchlistService.findAll();
    $scope.companies = CompanyService.query();
    $scope.stocks = StockService.getStocks($routeParams.listId);
    $scope.currentWatchlistId = $routeParams.listId;
    
    $scope.addStock = function() {
        StockService.save({
            watchlistId: $routeParams.listId,
            symbol: $scope.stock.symbol,
            shares: $scope.stock.shares
        });
        
        $scope.stock = {};
    };
    
    $scope.createList = function() {
        WatchlistService.save($scope.watchlist);
        $scope.watchlist = {};
    };
    
    $scope.deleteList = function(watchlist) {
        WatchlistService.remove(watchlist);
        StockService.remove(watchlist.nextId);
        $location.path('dashboard');
    };
    
    YahooService.fetch();

});