'use strict';

describe('Controller: ActiveCtrl', function () {

  // load the controller's module
  beforeEach(module('wildfireApp'));

  var ActiveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActiveCtrl = $controller('ActiveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
