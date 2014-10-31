'use strict';

describe('Directive: whenVisible', function () {
  beforeEach(module('authoringApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<when-visible></when-visible>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the whenVisible directive');
  }));
});
