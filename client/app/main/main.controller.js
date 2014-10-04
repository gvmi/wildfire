'use strict';

angular.module('wildfireApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.productList = [];

    $http.get('/api/products').success(function(productList) {
      $scope.productList = productList;
      socket.syncUpdates('product', $scope.productList);
    });

    $scope.addProduct = function() {
      if($scope.productName === '' || $scope.productDesc === '' || $scope.productPrice === '') {
        return;
      }
      $http.post('/api/products', { name: $scope.productName, desc: $scope.productDesc, price: $scope.productPrice });
      $scope.productName = '';
      $scope.productDesc = '';
      $scope.productPrice = '';
    };

    $scope.deleteProduct = function(product) {
      $http.delete('/api/products/' + product._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('product');
    });
  });
