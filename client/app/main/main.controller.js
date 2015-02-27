'use strict';

angular.module('wildfireApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.categoryList = [];

    $http.get('/api/categorys').success(function(categoryList) {
      $scope.categoryList = categoryList;
      socket.syncUpdates('category', $scope.categoryList);
    });

    $scope.addCategory = function() {
      if($scope.categoryName === '' || $scope.categoryDesc === '') {
        return;
      }
      $http.post('/api/categorys', {name: $scope.categoryName, desc: $scope.categoryDesc});
      $scope.categoryName = '';
      $scope.categoryDesc = '';
    };

    $scope.deleteCategory = function(category) {
      $http.delete('/api/categorys/' + category._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('category');
    });
  });
