'use strict';

angular.module('authoringApp', ['ui.date', 'ui.select2', '$strap.directives', 'ui.bootstrap'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/test', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
      .when('/details/:guid', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        resolve: {
          problem: [
            '$route', 'dataService',
            function($route, dataService){
              var guid = $route.current.params.guid;
              if (guid) return dataService.getProblem(guid);
            }
          ],
          solution: [
            '$route', 'dataService',
            function($route, dataService){
              var guid = $route.current.params.guid;
              if (guid) return dataService.getSolution(guid);
            }
          ]
        }
      })
      .otherwise({
        redirectTo: '/'
      })
    ;
  }])
  .value('$strapConfig', {
    datepicker: {
      language: 'en',
      format: 'M d, yyyy'
    }
  })