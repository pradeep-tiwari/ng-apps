var app = angular.module('books', ['ngRoute'])
    .constant('DATA_URL', 'localhost/products')
    .constant('ORDERS_URL', 'http://localhost:2403/orders')
    .constant('ACTIVE_CATEGORY_CLASS', 'active')
    .constant('ACTIVE_PAGE_CLASS', 'btn-red')
    .constant('PER_PAGE_COUNT', 12);