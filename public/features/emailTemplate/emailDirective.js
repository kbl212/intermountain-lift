var app = angular.module('intermountain-lift');


app.directive('emailform', function(){
    return {
        restrict: 'E',
        templateUrl: 'features/emailTemplate/emailTmpl.html'
    }
})