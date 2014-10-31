(function(){
    'use strict';

    angular.module('generalLedger').controller('AssignmentController', function($state, $stateParams, $scope, data) {
        _.extend($scope, data);
        if (! $state.includes('problem')){
            $state.transitionTo('problem', _.extend($stateParams, {
                problemNumber: $scope.assignment.initialProblem
            }));
        }
    });
}());