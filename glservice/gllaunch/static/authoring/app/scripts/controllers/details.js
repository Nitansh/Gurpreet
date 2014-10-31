'use strict';

angular.module('authoringApp').controller('DetailsCtrl',
  ['$scope', 'dataService', 'problem', 'solution', 'chartOfAccounts', 'problemMetadata',
  function ($scope, dataService, problem, solution, chartOfAccounts, problemMetadata) {
    var lastSavedProblem, lastSavedSolution;

    $scope.problem = problem;
    $scope.solution = solution;
    $scope.chartOfAccounts = chartOfAccounts;
    $scope.statuses = problemMetadata.statuses;
    $scope.save = function(){
      dataService.putProblemAndSolution(problem, solution).then(function(){
        lastSavedProblem = angular.copy(problem);
        lastSavedSolution = angular.copy(solution);
      });
    };
    $scope.newEvent = function(){
      var lastEventDate = problem.events.map('date').max('valueOf');
      problem.newEvent(lastEventDate || problem.period.start);
    };
    $scope.deleteEvent = function(event){
      problem.deleteEvent(event);
    };
    $scope.newTransaction = function(date){
      var lastTransactionDate = solution.transactions.map('date').max('valueOf');
      solution.newTransaction(lastTransactionDate || problem.period.start);
    }
    $scope.newTransactionRow = function(transaction){
      solution.newTransactionRow(transaction);
    }
    $scope.deleteTransactionRow = function(transaction, row){
      if (transaction.rows.length <= 2)
        solution.deleteTransaction(transaction);
      else 
        solution.deleteTransactionRow(transaction, row);
    }
    $scope.selectNone = function(){
      chartOfAccounts.accountList.each(function(act){
        problem.accounts[act.number].isIncluded = false;
      });   
    }
    $scope.selectAll = function(){
      chartOfAccounts.accountList.each(function(act){
        problem.accounts[act.number].isIncluded = true;
      });   
    }
    $scope.defaultIncludedAccounts = function(){
      var typeString = problem.ownerType + '.' + problem.companyType;
      chartOfAccounts.accountList.each(function(act){
        problem.accounts[act.number].isIncluded = act.defaultIncludedIn.some(typeString);
      });
    };
    $scope.defaultAccountNames = function(){
      chartOfAccounts.accountList.each(function(act){
        problem.accounts[act.number].name = act.defaultName;
      });
    }
    $scope.zeroInitialBalances = function(){
      Object.each(problem.accounts, function(number, act){
        act.openingBalance = 0;
      });
    }
    $scope.accountIncludedInProblem = function(act){
      return problem.accounts[act.number].isIncluded;
    };
    $scope.isDataSaved = function() {
      return angular.equals(problem, lastSavedProblem) &&
             angular.equals(solution, lastSavedSolution);
    };
  }]
);
