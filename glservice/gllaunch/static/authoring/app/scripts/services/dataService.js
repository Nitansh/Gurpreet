'use strict';

angular.module('authoringApp').service('dataService', [
  '$q', '$http', 'dataModel',
  function($q, $http, dataModel) {

    // var server = 'http://localhost:8000/gldata/';
    var server = '/glservice/gldata/';

    this.getProblemList = function(){
      return $http
        .get(server + 'get_problem_list/')
        .then(function(response){
          return response.data;
        })
      ;
    };
    this.getProblem = function(guid){
      return $http
        .get(server + 'get_problem/' + guid + '/')
        .then(function(response){
          return new dataModel.Problem(guid, response.data);
        }, function(){
          return new dataModel.Problem(guid);
        })
      ;
    };
    this.putProblem = function(problem){
      return $http
        .post(server + 'put_problem_definition/' + problem.guid + '/', problem)
        .then(function(response){
          console.log("Successfully saved problem " + problem.guid);
        }, function(response){
          console.log("Error saving problem " + problem.guid);
          console.log(response);
        })
      ;
    };
    this.deleteProblem = function(problem){
      return $http
        .post(server + 'delete_problem_definition/' + problem.guid + '/', problem)
        .then(function(response){
          console.log("Successfully deleted problem " + problem.guid);
        }, function(response){
          console.log("Error deleting problem " + problem.guid);
          console.log(response);
        })
      ;
    };
    this.getSolution = function(guid){
      return $http
        .get(server + 'get_problem_definition/' + guid + '/')
        .then(function(response){
          return new dataModel.Solution(guid, response.data.correct_data);
        }, function(response){
          return new dataModel.Solution(guid);
        })
      ;
    };
    this.putSolution = function(solution){
      return $http
        .post(server + 'put_solution/' + solution.guid + '/', solution)
        .then(function(response){
          console.log("Successfully saved solution " + solution.guid);
        }, function(response){
          console.log("Error saving solution " + solution.guid);
          console.log(response);
          return $q.reject(response);
        })
      ;
    };
    this.putProblemAndSolution = function(problem, solution){
      return $http
        .post(server + 'put_problem_and_solution/' + problem.guid + '/', {
          problem: problem,
          solution: solution
        })
        .then(function(response){
          console.log("Successfully saved problem " + problem.guid);
        }, function(response){
          console.log("Error saving problem " + problem.guid);
          console.log(response);
        })
      ;
    };

  }
]);
