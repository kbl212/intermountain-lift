var app = angular.module('intermountain-lift');


app.controller('historyCtrl', function($scope, allWorkService) {
    $scope.goToWorkPage = function(workType) {
        allWorkService.storeWorkType(workType);
    }
});