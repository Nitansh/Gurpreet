'use strict';

angular.module('authoringApp').constant('problemMetadata', {
  statuses: Object.extended({
    1: 'In development',
    2: 'QA - accuracy',
    3: 'QA - functionality',
    4: 'Ready to publish',
    5: 'Live',
    6: 'Ready to update live',
    7: 'Not suitable'
  })
});
