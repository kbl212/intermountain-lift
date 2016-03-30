var app = angular.module('intermountain-lift');


app.controller('equipmentCtrl', function ($scope) {
    $scope.currentPhotoType = 'Bending and Rolling';

    var bendingPics = [
        {
            name: '8" Pipe',
            image: '../../images/8bend01.jpg'
        },
        {
            name: '12" Pipe',
            image: '../../images/bulldozer1.jpg'
        },
        {
            name: '8" x 4" x 1/2" Rolled Angle',
            image: '../../images/rolledangle.jpg'
        },
        {
            name: 'W10 x 30#',
            image: '../../images/roundo.jpg'
        }
    ];
    var cranePics = [
        {
            name: '45 Ton Crane (above) Tripod Crown (below) "Knott\'s Berry Farm"     Tripod Crown in fabrication     S&S POWER INC.',
            image: '../../images/crane.jpg'
        }
    ];
    var loadingPics = [
        {
            name: 'Open Container',
            image: '../../images/loadingandpackaging/Load1.jpg'
        },
        {
            name: 'Drop Deck',
            image: '../../images/loadingandpackaging/Load2.jpg'
        },
        {
            name: 'Hard Top Container',
            image: '../../images/loadingandpackaging/Load.jpg'
        },
        {
            name: 'Drop Deck',
            image: '../../images/loadingandpackaging/Load3.jpg'
        },
        {
            name: 'Drop Deck',
            image: '../../images/loadingandpackaging/Load4.jpg'
        },
        {
            name: 'Drop Deck',
            image: '../../images/loadingandpackaging/Load5.jpg'
        },
        {
            name: 'Drop Deck',
            image: '../../images/loadingandpackaging/Load6.jpg'
        },
        {
            name: 'Drop Deck',
            image: '../../images/loadingandpackaging/Load7.jpg'
        },
        {
            name: 'Drop Deck',
            image: '../../images/loadingandpackaging/Load8.jpg'
        },
        {
            name: 'Drop Deck',
            image: '../../images/loadingandpackaging/Load9.jpg'
        },
        
    ];

    $scope.EquipmentObj = function (title, picSource) {
        this.title = title;
        this.image = picSource;
        return this;
    }
    $scope.changeCurrentPhotoType = function (typeIn) {
        $scope.currentPhotoType = typeIn;
    }

    $scope.showEquipmentObjs = function () {
        $scope.currentPhotos = [];
        if ($scope.currentPhotoType === 'Bending and Rolling') {
            for (var i = 0; i < bendingPics.length; i++) {
                $scope.currentPhotos.push(bendingPics[i]);
            }
            //Used to change which button looks active.
            $scope.bendingSelect = "active-equipment";
            $scope.cranesSelect = "inactive-equipment";
            $scope.loadingSelect = "inactive-equipment";
        } else if ($scope.currentPhotoType === 'Crane') {
            for (var i = 0; i < cranePics.length; i++) {
                $scope.currentPhotos.push(cranePics[i]);
            }
            $scope.bendingSelect = "inactive-equipment";
            $scope.cranesSelect = "active-equipment";
            $scope.loadingSelect = "inactive-equipment";
        } else if ($scope.currentPhotoType === 'Loading and Packaging') {
            for (var i = 0; i < loadingPics.length; i++) {
                $scope.currentPhotos.push(loadingPics[i]);
            }
            $scope.bendingSelect = "inactive-equipment";
            $scope.cranesSelect = "inactive-equipment";
            $scope.loadingSelect = "active-equipment";
        }
        $scope.mainImage = $scope.currentPhotos[0];
    }
    
    $scope.changeMainImage = function (indexIn) {
        $scope.mainImage = $scope.currentPhotos[indexIn];
    }

    $scope.showEquipmentObjs('Bending and Rolling');

});