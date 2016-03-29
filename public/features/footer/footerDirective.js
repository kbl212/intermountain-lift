var app = angular.module('intermountain-lift');


app.directive('myfooter', function() {
    return {
        restrict: 'E',
        templateUrl: 'features/footer/footerTmpl.html'
    }
});