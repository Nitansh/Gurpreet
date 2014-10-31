(function(){
	'use strict';

	angular.module('generalLedger').controller('ReportsController', controller);

	function controller($scope, reports) {
		$scope.$watch('problem.number + "-" + solution.currentPeriodNumber', function(){
			$scope.periodEndedLine = makePeriodEndedLine($scope.problem.period.length, $scope.solution.getPeriod().end);
		});
		$scope.periodEndedLine = makePeriodEndedLine

		Object.merge($scope, reports);

		// var id = 0;
		// var testGJ = chartOfAccounts.accountList.map(function(act){
		// 	return {
		// 		transactionid: 0,
		// 		subTransactionId: id++,
		// 		date: '2012-12-01',
		// 		account: act.number,
		// 		amount: 100
		// 	};
		// });
		// console.log(JSON.stringify(testGJ));
	}

    function makePeriodEndedLine(length, end){
        var periodLengths = {
                1: 'Month',
                2: '2 Months',
                3: 'Quarter',
                4: '4 Months',
                5: '5 Months',
                6: '6 Months',
                7: '7 Months',
                8: '8 Months',
                9: '9 Months',
                10: '10 Months',
                11: '11 Months',
                12: 'Year',
        };
        return periodLengths[length] + ' Ended ' + end.short();
    }
}());