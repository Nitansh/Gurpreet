(function(){
    'use strict';

    angular.module('generalLedger').directive('appVersion',
        ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
      }]);
}());