/**
 * Created by jeffjin on 2014-03-22.
 */

angular.module('keenerApp')
    .directive('knAddPerson', ['$timeout', function ($timeout) {
      var def = {
        restrict: 'AE',
        templateUrl: 'views/add-person.html',
        controller: function($scope){
          console.log('knAddPerson directive controller is called');
        },
        link: function($scope, element, attrs){
          console.log('knAddPerson directive link is called');

        }
      };
      return def;
    }]);