/**
 * Created by jeffjin on 2014-03-22.
 */

angular.module('keenerApp')
    .directive('knLeftPanel', ['$timeout', function ($timeout) {
      var def = {
        restrict: 'AE',
        templateUrl: 'views/left-panel.html',
        controller: function($scope){
        },
        link: function($scope, element, attrs){

        }
      };
      return def;
    }]);