var app = angular.module('intermountain-lift');


app.controller('contactCtrl', function ($scope) {

    $scope.initMap = function () {
        var myLatLng = {
            lat: 40.140210,
            lng: -111.614170
        };

        $scope.map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: $scope.map,
            title: 'intermountainLift'
        });
    }

    $scope.initMap();
});