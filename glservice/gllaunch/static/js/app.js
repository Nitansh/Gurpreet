(function(){
    'use strict';

    angular.module('generalLedger', ['ng', 'ngResource', 'ui', 'ui.state', 'ui.bootstrap'])
        .run(function(){
            Function.prototype.memoize = function(hasher){
                return _.memoize(this, hasher);
            };
        })
        .value('$anchorScroll', angular.noop)
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider
                 .when('', '/')
                 .when('/:sessionId/', '/:sessionId')
                 .when('/:sessionId/problem/:problemNumber', '/:sessionId/problem/:problemNumber/')
                 .when('/:sessionId/problem/:problemNumber/', '/:sessionId/problem/:problemNumber/business')
                 .when('/:sessionId/problem/:problemNumber/business', '/:sessionId/problem/:problemNumber/business/GeneralJournal/view')
                 .when('/:sessionId/problem/:problemNumber/reports', '/:sessionId/problem/:problemNumber/reports/TransactionsByDate')
            ;
            var root = {
                name: 'root',
                url: '/',
                template: 'You need to specify a session ID!'
            };
            var assignment = {
                name: 'assignment',
                url: '/{sessionId}',
                controller: 'AssignmentController',
                template: '<div ui-view></div>',
                resolve: {
                    data: function($stateParams, glData){
                        var data = {
                            sessionId: $stateParams.sessionId
                        };

                        return glData.getAssignment(data.sessionId)
                            .then(function(assignment){
                                data.assignment = assignment;
                                return glData.getSolutionSet(assignment, data.sessionId);
                            })
                            .then(function(solutionSet){
                                // asynchronous round trip to server to save solution set if new
                                console.log("APP.JS: got solution set, now saving.");
                                glData.saveSolutionSet(solutionSet, data.sessionId);
                                data.solutionSet = solutionSet;
                                return data;
                            })
                        ;
                    }
                }
            };
            var problem = {
                name: 'problem',
                parent: 'assignment',
                url: '/problem/{problemNumber}',
                // abstract: true,
                controller: 'ProblemController',
                templateUrl: '/static/partials/assignment.html'
            };
            var business = {
                name: 'business',
                parent: problem,
                url: '/business',
                // abstract: true,
                templateUrl: '/static/partials/businessTabs.html'
            };
            var reports = {
                name: 'reports',
                parent: problem,
                url: '/reports',
                // abstract: true,
                controller: 'ReportsController',
                templateUrl: '/static/partials/reportsTabs.html'
            };
            var generalJournal = {
                name: 'generalJournal',
                parent: business,
                url: '/GeneralJournal',
                controller: 'GeneralJournalController',
                template: '<div ui-view></div>',
                // abstract: true
            };
            var gjView = {
                name: 'gjView',
                parent: generalJournal,
                url: '/view',
                templateUrl: '/static/partials/generalJournalDisplay.html'
            };
            var gjEdit = {
                name: 'gjEdit',
                parent: generalJournal,
                url: '/edit/{transactionId}',
                controller: 'GeneralJournalEditController',
                templateUrl: '/static/partials/generalJournal.html'
            };
            var gjNew = {
                name: 'gjNew',
                parent: generalJournal,
                url: '/new/{transactionId}',
                controller: 'GeneralJournalEditController',
                templateUrl: '/static/partials/generalJournal.html'
            };
            var companyInformation = {
                name: 'companyInformation',
                parent: business,
                url: '/CompanyInformation',
                templateUrl: '/static/partials/companyInformation.html'
            };
            var chartOfAccounts = {
                name: 'chartOfAccounts',
                parent: business,
                url: '/ChartOfAccounts',
                controller: 'ChartOfAccountsController',
                templateUrl: '/static/partials/chartOfAccounts.html'
            };
            var generalLedger = {
                name: 'generalLedger',
                parent: reports,
                url: '/GeneralLedger',
                templateUrl: '/static/partials/generalLedger.html'
            };
            var transactionsByDate = {
                name: 'transactionsByDate',
                parent: reports,
                url: '/TransactionsByDate',
                templateUrl: '/static/partials/transactionsByDate.html'
            };
            var trialBalance = {
                name: 'trialBalance',
                parent: reports,
                url: '/TrialBalance',
                templateUrl: '/static/partials/trialBalance.html'
            };
            var incomeStatement = {
                name: 'incomeStatement',
                parent: reports,
                url: '/IncomeStatement',
                templateUrl: '/static/partials/incomeStatement.html'
            };
            var statementOfOwnersEquity = {
                name: 'statementOfOwnersEquity',
                parent: reports,
                url: '/StatementOfOwnersEquity',
                templateUrl: '/static/partials/statementOfOwnersEquity.html'
            };
            var balanceSheet = {
                name: 'balanceSheet',
                parent: reports,
                url: '/BalanceSheet',
                templateUrl: '/static/partials/balanceSheet.html'
            };
            var cashFlow = {
                name: 'cashFlow',
                parent: reports,
                url: '/CashFlow',
                templateUrl: '/static/partials/cashFlow.html'
            };

            $stateProvider
                .state(root)

                .state(assignment)

                .state(problem)

                .state(business)
                .state(companyInformation)
                .state(chartOfAccounts)
                .state(generalJournal)
                .state(gjEdit)
                .state(gjNew)
                .state(gjView)

                .state(reports)
                .state(transactionsByDate)
                .state(generalLedger)
                .state(trialBalance)
                .state(incomeStatement)
                .state(statementOfOwnersEquity)
                .state(balanceSheet)
                .state(cashFlow)
            ;
        })
        .run(function($rootScope, $state) {
            $rootScope.$state = $state;
        })
    ;
}());
