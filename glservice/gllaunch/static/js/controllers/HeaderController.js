(function(){
	'use strict';

	angular.module('generalLedger').controller('HeaderController', function($scope, $state, $stateParams){
		$scope.selectProblem = function(number){
			$stateParams.problemNumber = number;
			$state.transitionTo('problem', $stateParams);
		};
		$scope.prevProblem = function(){
			var toProblem = $scope.problem.previous();
			if (! toProblem) return;
			$stateParams.problemNumber = toProblem.number;
			$state.transitionTo('problem', $stateParams);
		};
		$scope.nextProblem = function(){
			var toProblem = $scope.problem.next();
			if (! toProblem) return;
			$stateParams.problemNumber = toProblem.number;
			$state.transitionTo('problem', $stateParams);
		};
	});
}());