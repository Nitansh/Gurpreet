'use strict';

angular.module('authoringApp')
  .directive('jwysiwyg', function ($timeout) {
    return {
      require: '?ngModel',
      link: function postLink(scope, element, attrs, ngModel) {
        $timeout(function(){
          element.wysiwyg({
            // rmUnusedControls: true,
            css: 'styles/jwysiwyg.css',
            controls: {
              // remove these default controls
              h1 : { visible: false },
              h2 : { visible: false },
              h3 : { visible: false },
              createLink  : { visible: false },
              unLink : { visible: false },
              insertImage : { visible: false },
              code : { visible: false },
              insertHorizontalRule : { visible: false },
              insertTable : { visible: false },

              // add these controls
              decreaseFontSize : { visible: true },
              increaseFontSize : { visible: true }
            },
            autoGrow: true,
            initialContent: ngModel.$viewValue || ''
          });
          element.bind('change', function(event){
            ngModel.$setViewValue(event.currentTarget.value);
          });
        });
        ngModel.$render = function() {
          element.wysiwyg('setContent', ngModel.$viewValue || '');
        };
      }
    };
    // return {
    //   template: '<div></div>',
    //   restrict: 'E',
    //   link: function postLink(scope, element, attrs) {
    //     element.text('this is the jwysiwyg directive');
    //   }
    // };
  });
