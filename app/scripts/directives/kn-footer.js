/**
 * Created by jeffjin on 2014-03-22.
 */

angular.module('keenerApp')
    .directive('knFooter', ['$timeout', function ($timeout) {
      var def = {
        restrict: 'AE',
        templateUrl: 'views/footer.html',
        controller: function($scope){
          console.log('knHeader directive controller is called');
        },
        link: function(scope, element, attrs){
          console.log('knHeader directive link is called');

        }
      };
      return def;
    }]);