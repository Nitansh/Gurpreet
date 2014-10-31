angular.module('generalLedger').controller('ChartOfAccountsController', function($scope, chartOfAccounts) {
	'use strict';

	$scope.includedAccounts = $scope.problem.includedAccounts;
});