'use strict';

angular.module('wildfireApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('active', {
        url: '/active',
        templateUrl: 'app/active/active.html',
        controller: 'ActiveCtrl'
      });
  });