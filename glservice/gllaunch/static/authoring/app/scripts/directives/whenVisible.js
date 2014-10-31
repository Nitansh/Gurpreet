'use strict';

angular.module('authoringApp')
  .directive('whenVisible', function ($window) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var win = angular.element($window);
        win.bind('scroll', function(){
          var docViewTop = win.scrollTop();
          var docViewBottom = docViewTop + win.height();

          var elemTop = element.offset().top;
          var elemBottom = elemTop + element.height();

          var val = (elemTop > docViewTop && elemTop < docViewBottom) ||
                    (elemBottom > docViewTop && elemBottom < docViewBottom) ||
                    (elemTop < docViewTop && elemBottom > docViewBottom);
          scope.$apply(function(){
            scope[attrs.whenVisible] = val;
          });
        });
      }
    };
  });
