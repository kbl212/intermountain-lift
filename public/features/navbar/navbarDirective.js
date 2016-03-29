var app = angular.module('intermountain-lift');


app.directive('navbar', function(){
    return {
        restrict: 'E',
        templateUrl: 'features/navbar/navbarTmpl.html'
    }
})