(function(){
    'use strict';

    angular.module('generalLedger')
        .service('glData', function($q, $http, glModels){
            var self = this;

            var server = "http://127.0.0.1:8000/gldata/";

            self.getAssignment = function(sessionId){
                return $http
                    .get(server + 'get_session_data/' + sessionId + '/')
                    .then(function(response){
                        var assignment = new glModels.Assignment(sessionId, response.data.launch_data);
                        return self.getProblems(assignment)
                            .then(function(problems){
                                assignment.problems = problems;
                                return assignment;
                            })
                        ;
                    })
                ;
            };

            self.getProblems = function(assignment){
                return $q.all(_(assignment.problems).map(function(problem){
                    return self.getProblem(assignment, problem);
                }));
            };

            self.getProblem = function(assignment, problem){
                return $http
                    .get(server + 'get_problem/' + problem.guid + '/')
                    .then(function(response){
                        return new glModels.Problem(assignment, problem.number, problem.guid, problem.title, response.data);
                    })
                ;
            };

            self.getSolutionSet = function(assignment, sessionId){
                return $http
                    .get(server + 'get_session_data/' + sessionId + '/')
                    .then(function(response){
                        return new glModels.SolutionSet(assignment, response.data.session_state);
                    })
                ;
            };

            self.saveSolutionSet = function(solutionSet, sessionId){
                var jso = solutionSet.toJSO();
                return $http.post(server + 'put_session_state_data/' + sessionId + '/', jso);
            };

            self.saveSolution = function(assignment, solution, sessionId){
                return self.getSolutionSet(assignment, sessionId)
                    .then(function(solutionSet){
                        solutionSet.setSolution(solution);
                        var jso = solutionSet.toJSO();
                        return $http.post(server + 'put_session_state_data/' + sessionId + '/', jso);
                    })
                ;
            };

            self.submitSolution = function(solution, sessionId){
                var jso = {
                    answers: solution.generalJournal.rows,
                    duration: (Date.now() - solution.attemptStartedTime.getTime()) / 1000,
                    nAttempts: solution.nAttempts
                };
                return $http
                    .post(server + 'grade_problem_and_report/' + sessionId + "/" + solution.problem.guid + '/', jso)
                    .then(function(response){
                        return response.data;
                    })
                ;
            };
        })
    ;
}());
