'use strict';

angular.module('authoringApp')
  .directive('initFocus', function () {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.focus();
      }
    };
  });
