(function(){
    'use strict';

    angular.module('generalLedger').controller('GeneralJournalEditController', function($scope, $state, $stateParams, glModels, chartOfAccounts) {
        var sc = $scope;
        var transactionId = parseInt($stateParams.transactionId, 10);

        sc.accountNumbers = chartOfAccounts.accountList.map('number');

        // if this is an existing transaction, copy rows from general journal
        if ($state.current.name == 'gjEdit') {
            sc.transactionRows = _.chain(sc.generalJournal.rows)
                .where({transactionId: transactionId})
                .map(function(row){return angular.copy(row);})
                .value()
            ;
        // add initial row if this is a new transaction
        } else if ($state.current.name == 'gjNew') {
            var startDate = sc.generalJournal.rows
                .map('date')
                .max('valueOf') || sc.problem.period.start;
            ;
            sc.transactionRows = [{
                date:               startDate,
                subTransactionId:   0,
                account:            "",
                description:        "",
                debit:              "",
                credit:             ""
            },
            {
                date:               startDate,
                subTransactionId:   1,
                account:            "",
                description:        "",
                debit:              "",
                credit:             ""
            }];
        } else {
            console.log("Unexpected $state: " + $state.current.name);
        }

        // no rows are checked by default
        sc.selectedRows = [];

        sc.testSelected = function(subtxId){
            return _(sc.selectedRows).indexOf(subtxId) >= 0;
        };

        sc.select = function(subtxId){
            if (! sc.testSelected(subtxId)){
                sc.selectedRows.push(subtxId);
            } else {
                sc.selectedRows = _(sc.selectedRows).without(subtxId);
            }
        };

        sc.areAllSelected = function(){
            return _(sc.transactionRows).all(function(row){
                return sc.testSelected(row.subTransactionId);
            });
        };

        sc.selectAll = function(){
            // invert selection
            if (! $scope.areAllSelected()) {
                sc.selectedRows = _(sc.transactionRows).pluck('subTransactionId');
            } else {
                sc.selectedRows = [];
            }
        };

        sc.addRow = function() {
            // This should really be in the model
            var lastSubTransactionId = _(sc.transactionRows).chain()
                .pluck('subTransactionId')
                .max()
                .value();
            var newSubTxId = lastSubTransactionId >= 0 ?
                             lastSubTransactionId + 1 : 0;
            sc.transactionRows.push({
                date:               sc.transactionRows[0].date,
                transactionId:      sc.transactionRows[0].transactionId,
                subTransactionId:   newSubTxId,
                account:            "",
                description:        "",
                debit:              "",
                credit:             ""
            });
        };

        sc.deleteRows = function(){
            if (sc.areAllSelected()) return;
            sc.transactionRows = _(sc.transactionRows).filter(function(row){
                return _(sc.selectedRows).indexOf(row.subTransactionId) < 0;
            });
        };

        sc.postToJournal = function() {
            // form validity logic should live somewhere else and disable button in view
            if (sc.transactionsForm.$invalid) return;

            // Create GeneralJournalRow objects from transactionRows in view
            var gjRows = _(sc.transactionRows).map(function(row){
                return new glModels.GeneralJournalRow(row);
            });

            if ($state.current.name == 'gjEdit') {
                sc.generalJournal.updateTransaction(transactionId, gjRows);
            } else if ($state.current.name == 'gjNew') {
                sc.generalJournal.addTransaction(gjRows);
            } else {
                console.log("Unexpected $state: " + $state.current.name);
            }

            $state.transitionTo('gjView', $stateParams);
        };
        
        $scope.transactionCancelled = function() {
            $state.transitionTo('gjView', $stateParams);
        };

        // JMS: This is hackish and should use a real model
        $scope.zeroCredit = function(row){
            row.credit = "";
        };
        $scope.zeroDebit = function(row){
            row.debit = "";
        };

        $scope.isReadyForPost = function(){
            var isNumber = function(n){
                if (Object.isNumber(n)) return true;
                else if (Object.isString(n)){
                    n = n.remove(/\$/g);
                    return (! Object.isNaN(n.toNumber()));
                }
                else return false;
            }
            return sc.transactionRows.every(function(row){
                return isNumber(row.account) &&
                       (isNumber(row.debit) || isNumber(row.credit))
                ;
            });
        }

        // JMS: subsequent rows point at same date as row 0
        $scope.$watch('transactionRows[0].date', function() {
            var newDate = $scope.transactionRows[0].date;
            for (var i in $scope.transactionRows) {
                $scope.transactionRows[i].date = newDate;
            }
        });
    });
}());