(function(){
    'use strict';

    angular.module('generalLedger').service('glModes', function($rootScope){
        var self = this;

        self.modeFor = function(solution){
            var attemptsAllowed = solution.problem.assignment.attemptsAllowed;
            var nAttempts = solution.nAttempts;
            if (solution.state == 'review' && solution.problem.assignment.origState == 'preview')
                return self.PreviewReview;
            else if (solution.state == 'review' && attemptsAllowed > 0 && nAttempts >= attemptsAllowed)
                return self.DoneReview;
            else if (solution.state == 'review' && solution.problem.assignment.origState == 'do')
                return self.DoReview;
            else return {
                'do'    : self.Do,
                review  : self.Review,
                preview : self.Preview,
                practice: self.Practice
            }[solution.state];
        };

        function Mode(props){
            _.extend(this, props);
        }
        Mode.prototype = {
            isActive: function(fn){
                return this[fn] != noop;
            }
        };

        self.Do = new Mode({
            description     : 'Do Mode',

            save            : save,
            reset           : reset,
            results         : noop,
            submit          : submit
        });

        self.DoReview = new Mode({
            description     : 'Do/Review Mode',

            save            : noop,
            reset           : reset,
            results         : results,
            submit          : noop
        });

        self.DoneReview = new Mode({
            description     : 'Done/Review Mode',

            save            : noop,
            reset           : noop,
            results         : results,
            submit          : noop
        });

        self.Review = new Mode({
            description     : 'Review Mode',

            save            : noop,
            reset           : noop,
            results         : results,
            submit          : noop
        });

        self.Preview = new Mode({
            description     : 'Preview Mode',

            save            : noop,
            reset           : reset,
            results         : noop,
            submit          : submit
        });
        
        self.PreviewReview = new Mode({
            description     : 'Preview/Review Mode',

            save            : noop,
            reset           : reset,
            results         : results,
            submit          : noop
        });

        self.Practice = new Mode({
            description     : 'Practice Mode',

            save            : noop,
            reset           : reset,
            results         : noop,
            submit          : submit
        });

        function noop(){}

        function save(){
            $rootScope.$broadcast('saveSolution');
        }
        function reset(){
            $rootScope.$broadcast('resetSolution');
        }
        function results(){
            $rootScope.$broadcast('showResults');
        }
        function submit(){
            $rootScope.$broadcast('submitSolution');
        }

    });
}());