var app = angular.module('intermountain-lift');


app.controller('homeCtrl', function($scope, allWorkService){
    $scope.goToWorkPage = function(workType) {
        allWorkService.storeWorkType(workType);
    }
})