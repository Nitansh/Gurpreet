(function(){
    'use strict';

    angular.module('generalLedger').controller('ProblemController', function($rootScope, $scope, $stateParams, $dialog, glData) {
        var problemNumber = parseInt($stateParams.problemNumber, 10);
        $scope.problem = $scope.assignment.getProblemNumber(problemNumber);
        $scope.solution = $scope.solutionSet.getSolution($scope.problem);

        var submissionInProgress = false;

        _(['save', 'reset', 'results', 'submit']).each(function(fn){
            $scope[fn] = function(){
                $scope.solution.mode[fn]();
            };
        });

        $scope.$on('saveSolution', function(){
            console.log("Saving solution");
            glData.saveSolution($scope.assignment, $scope.solution, $scope.sessionId)
                .then(function(){
                    $dialog.messageBox('Save', 'Your work on this problem has been saved.', [{label: 'OK'}])
                        .open()
                    ;
                }, function(){
                    $dialog.messageBox('Save', 'Error saving. Try again later.', [{label: 'OK'}])
                        .open()
                    ;
                })
            ;
        });

        $scope.$on('submitSolution', function(){
            if (submissionInProgress) return;
            submissionInProgress = true;
            console.log("Submitting solution");
            glData.submitSolution($scope.solution, $scope.sessionId)
                .then(function(feedback){
                    $scope.solution.nAttempts++;
                    $scope.solution.attemptStartedTime = new Date();
                    $scope.solution.setFeedback(feedback);
                    $scope.solution.setMode('review');
                    glData.saveSolution($scope.assignment, $scope.solution, $scope.sessionId);
                    $rootScope.$broadcast('showResults');
                    submissionInProgress = false;
                }, function(){
                    $dialog.messageBox('Submit', 'Error submitting solution. Try again later.', [{label: 'OK'}])
                        .open()
                    ;
                    submissionInProgress = false;
                })
            ;
        });

        $scope.$on('showResults', function(){
            var feedback = $scope.solution.feedback;
            $dialog.dialog({
                templateUrl: '/static/partials/feedback.html',
                controller: function($scope, dialog){
                    $scope.feedback = feedback;
                    $scope.close = function(){ dialog.close(); };
                }
            }).open();
        });

        $scope.$on('resetSolution', function(){
            $scope.solution.generalJournal.clear();
            $scope.solution.setMode($scope.assignment.origState);
        });

        $scope.hasPrevPeriod = function(){
            return $scope.solution.currentPeriodNumber > 0;
        };
        $scope.prevPeriod = function(){
            $scope.solution.prevPeriod();
        };
        $scope.nextPeriod = function(){
            $scope.solution.nextPeriod();
        };
    });
}());