var app = angular.module('intermountain-lift');


app.controller('customersCtrl', function($scope) {
    $scope.amusementCustomers = [
        {
            name: "Chance-Morgan Rides",
            link: "http://www.chancemorgan.com"
        },
        {
            name: "Interactive Rides, Inc.",
            link: "http://www.interactiverides.com"
        },
        {
            name: "Kings Dominion",
            link: "https://www.kingsdominion.com/"
        },
        {
            name: "Knott's Berry Farms",
            link: "http://www.knotts.com"
        },
        {
            name: "Lagoon",
            link: "http://www.lagoonpark.com"
        },
        {
            name: "Premier Rides",
            link: "http://www.premier-rides.com"
        },
        {
            name: "Sarcos",
            link: "http://www.sarcos.com"
        },
        {
            name: "Setpoint",
            link: "http://www.setpointusa.com"
        },
        {
            name: "Silver Dollar City",
            link: "http://www.silverdollarcity.com"
        },
        {
            name: "S&S Worldwide",
            link: "http://www.ssglobalinc.com"
        }
    ];
    
    $scope.transportationCustomers = [
        {
            name: "Doppelmayr CTEC",
            link: "http://www.doppelmayrctec.com"
        },
        {
            name: "Otis Elevator Company",
            link: "http://www.otis.com"
        },
        {
            name: "Rocky Mountain Composites",
            link: "http://www.rockymountaincomposites.com"
        },
        {
            name: "Sundance Enterprises",
            link: "http://www.sundanceresort.com"
        }
    ];
    
    $scope.industrialCustomers = [
        {
            name: "Amerex",
            link: "http://www.amerexind.com"
        },
        {
            name: "Energy West",
            link: "http://www.energywest.com"
        },
        {
            name: "FMC Corporation",
            link: "http://www.fmc.com"
        },
        {
            name: "Leitner - Poma of America Inc.",
            link: "http://www.fmc.com"
        },
        {
            name: "National Oilwell Varco",
            link: "http://www.nov.com"
        },
        {
            name: "Nucor Corporation",
            link: "http://www.nucor.com"
        },
        {
            name: "Schuff International",
            link: "http://www.schuff.com"
        },
        {
            name: "SME Industries, Inc.",
            link: "http://www.smesteel.com"
        }
    ];
});