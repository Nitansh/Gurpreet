'use strict';

describe('Directive: jwysiwyg', function () {
  beforeEach(module('authoringApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<jwysiwyg></jwysiwyg>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the jwysiwyg directive');
  }));
});
