var app = angular.module('intermountain-lift', ['ngRoute']);


app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: 'features/homePage/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .when('/contact', {
            templateUrl: 'features/contactPage/contactTmpl.html',
            controller: 'contactCtrl'
        })
        .when('/customers', {
            templateUrl: 'features/customersPage/customersTmpl.html',
            controller: 'customersCtrl'
        })
        .when('/employment', {
            templateUrl: 'features/employmentPage/employmentTmpl.html',
            controller: 'employmentCtrl'
        })
        .when('/facilities', {
            templateUrl: 'features/facilitiesPage/facilitiesTmpl.html',
            controller: 'facilitiesCtrl'
        })
        .when('/history', {
            templateUrl: 'features/historyPage/historyTmpl.html',
            controller: 'historyCtrl'
        })
        .when('/quality', {
            templateUrl: 'features/qualityPage/qualityTmpl.html',
            controller: 'qualityCtrl'
        })
        .when('/equipment', {
            templateUrl: 'features/equipmentPage/equipmentTmpl.html',
            controller: 'equipmentCtrl'
        })
        .when('/work', {
            templateUrl: 'features/allWorkPage/allWorkTmpl.html',
            controller: 'allWorkCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);