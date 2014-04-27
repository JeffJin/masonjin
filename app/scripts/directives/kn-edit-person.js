/**
 * Created by jeffjin on 2014-03-22.
 */

angular.module('keenerApp')
    .directive('knEditPerson', ['$timeout', function ($timeout) {
      var def = {
        restrict: 'AE',
        templateUrl: 'views/edit-person.html',
        controller: function($scope){
          console.log('knEditPerson directive controller is called');
        },
        link: function($scope, element, attrs){
          console.log('knEditPerson directive link is called');

        }
      };
      return def;
    }]);