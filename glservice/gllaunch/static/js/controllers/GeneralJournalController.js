
(function(){
	'use strict';

	angular.module('generalLedger').controller('GeneralJournalController', function($scope, $state, $stateParams) {
		var sc = $scope;

		// grab general journal from solution in scope
		sc.generalJournal = sc.solution.generalJournal;
		// array of selected transaction IDs
		sc.selectedTransactions = [];

		sc.testSelected = function(txId){
			return _(sc.selectedTransactions).indexOf(txId) >= 0;
		};

		sc.select = function(txId){
			if (! sc.testSelected(txId)){
				sc.selectedTransactions.push(txId);
			} else {
				sc.selectedTransactions = _(sc.selectedTransactions).without(txId);
			}
		};

		sc.areAllSelected = function(){
			return _(sc.generalJournal.rows).all(function(row){
				return sc.testSelected(row.transactionId);
			});
		};

		sc.selectAll = function(){
			// invert selection
			if (! $scope.areAllSelected()) {
				sc.selectedTransactions = _(sc.generalJournal.rows).pluck('transactionId');
			} else {
				sc.selectedTransactions = [];
			}
		};

		sc.addTransaction = function() {
			$state.transitionTo('gjNew', $stateParams);
		};

		sc.editTransaction = function() {
			// find first selected txId
			var txId = _(sc.selectedTransactions).min();
			if (txId >= 0) {
				$state.transitionTo('gjEdit', _($stateParams).extend({transactionId: txId}));
			}
		};

		sc.deleteTransactions = function(){
			sc.generalJournal.deleteTransactions(sc.selectedTransactions);
			sc.selectedTransactions = [];
		};

		sc.$watch("generalJournal.rows", function(periodRows){
			sc.$eval("periodRows = generalJournal.periodRows | orderBy:['date.valueOf()','transactionId','isCredit','subTransactionId']");
			sc.periodRows = periodRows;
		});

		sc.isFirstTransactionRow = function(row){
			var i = sc.periodRows.indexOf(row);
			if (i === 0) return true;
			else if (row.transactionId != sc.periodRows[i-1].transactionId) return true;
			else return false;
		};

		sc.isIncorrectTransaction = function(row){
			if (sc.solution.state == 'review' &&
				!sc.solution.feedback.isTransactionCorrect(row))
				return true;
			else
				return false;
		}

		sc.isTransactionSelected = function(){
			return sc.selectedTransactions.length > 0;
		}

		sc.isOneTransactionSelected = function(){
			return sc.selectedTransactions.length == 1;
		}
	});
}());