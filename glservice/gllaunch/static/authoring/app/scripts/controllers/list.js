'use strict';

angular.module('authoringApp').controller('ListCtrl',
  ['$scope', '$location', '$dialog', 'dataModel', 'dataService', 'problemMetadata',
  function ($scope, $location, $dialog, dataModel, dataService, problemMetadata) {
    dataService.getProblemList()
      .then(function(problems){
        $scope.problems = problems;
      })
    ;
    $scope.statuses = problemMetadata.statuses;
    $scope.deleteProblem = function(problem) {
      var title = 'Delete Problem';
      var msg = 'Delete problem ' + problem.guid + '?';
      var btns = [
        {result: false, label: 'Cancel', cssClass: 'btn-primary'},
        {result: true, label: 'Delete'}
      ];
      $dialog.messageBox(title, msg, btns)
        .open()
        .then(function(result){
          if (result) dataService.deleteProblem(problem)
            .then(function(){
              $scope.problems.remove(problem);
            }, function(){
              alert('There was an error deleting problem ' + problem.guid);
            })
          ;
        })
      ;
    };
    $scope.newProblem = function() {
      var newGuid = dataModel.makeGuid();
      $location.path('details/' + newGuid);
    };
  }]
);
