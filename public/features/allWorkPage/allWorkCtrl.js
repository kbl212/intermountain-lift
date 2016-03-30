var app = angular.module('intermountain-lift');


app.controller('allWorkCtrl', function ($scope, allWorkService) {
    $scope.retrieveWorkType = function () {
        $scope.currWorkType = allWorkService.retrieveWorkType();
    }

    $scope.retrieveWorkType();

    $scope.amusementDescription = "As amusement rides continue to become more sophisticated and more technical, designs demand a greater amount of highly complex production. Intermountain Lift understands the dynamic nature of this specialized field. Years of experience in producing amusement ride steel construction enable intermountain lift to work with engineers to build the safest, most precise structures possible. Take a look.";

    $scope.amusements = [
        {
            title: "Dodonpa",
            placeName: "Fujikyu Highland",
            location: "Fujiyoshida, Japan",
            company: "S&S POWER INC.",
            image: "../../images/allamusements/Dodonpa.jpg"
        },
        {
            title: "Dodonpa",
            placeName: "Fujikyu Highland",
            location: "Fujiyoshida, Japan",
            company: "S&S POWER INC.",
            image: "../../images/allamusements/Dodonpa1.jpg"
        },
        {
            title: "Dodonpa",
            placeName: "Fujikyu Highland",
            location: "Fujiyoshida, Japan",
            company: "S&S POWER INC.",
            image: "../../images/allamusements/Dodonpa2.jpg"
        },
        {
            title: "Kilauea Tripod Top",
            placeName: "Warner Bros.",
            location: "Spain",
            company: "S&S POWER INC.",
            image: "../../images/allamusements/Spain_top.jpg"
        },
        {
            title: "Hypersonic XLS",
            placeName: "Paramount's King's Dominion",
            location: "Doswell, Virginia",
            company: "S&S POWER INC.",
            image: "../../images/allamusements/paramount.jpg"
        },
        {
            title: "Tripod",
            placeName: "Six Flags Mexico",
            location: "Mexico City, Mexico",
            company: "S&S POWER INC.",
            image: "../../images/allamusements/Mexico.jpg"
        },
        {
            title: "Speed",
            placeName: "NASCAR Cafe",
            location: "Las Vegas, Nevada",
            company: "PREMIER RIDES INC.",
            image: "../../images/allamusements/Sahara.jpg"
        },
        {
            title: "Speed",
            placeName: "NASCAR Cafe",
            location: "Las Vegas, Nevada",
            company: "PREMIER RIDES INC.",
            image: "../../images/allamusements/Sahara1.jpg"
        },
        {
            title: "Flying Super Saturator",
            placeName: "Paramount Park",
            location: "Caroline, North Carolina",
            company: "SETPOINT INC.",
            image: "../../images/allamusements/supersaturator.jpg"
        },
        {
            title: "Scream Tripod",
            placeName: "Six Flags Fiesta Texas",
            location: "San Antonio, Texas",
            company: "S&S POWER INC.",
            image: "../../images/allamusements/SSFT_S_S.jpg"
        },
        {
            title: "Scream Tripod",
            placeName: "Six Flags Fiesta Texas",
            location: "San Antonio, Texas",
            company: "S&S POWER INC.",
            image: "../../images/allamusements/SSFT_S_S1.jpg"
        },
        {
            title: "Six Flag Fiesta Texas",
            placeName: "San Antonio, Texas",
            location: '"Scream" / Tripod (background) - S&S POWER INC.',
            company: '"Poltergiest" (foreground) - PREMIER RIDES INC.',
            image: "../../images/allamusements/SSFT_poltergeist.jpg"
        },
        {
            title: "Poltergeist",
            placeName: "Six Flags Fiesta Texas",
            location: "San Antonio, Texas",
            company: "PREMIER RIDES INC.",
            image: "../../images/allamusements/SSFT_poltergeist1.jpg"
        },
        {
            title: "Jokers Jinx",
            placeName: "Six Flags Adventure World",
            location: "Maryland",
            company: "PREMIER RIDES INC.",
            image: "../../images/allamusements/jokersjinx2.jpg"
        },
        {
            title: "Jokers Jinx",
            placeName: "Six Flags Adventure World",
            location: "Maryland",
            company: "PREMIER RIDES INC.",
            image: "../../images/allamusements/jokersjinx1.jpg"
        },
        {
            title: "Mad Cobra",
            placeName: "Suzuka Circuit",
            location: "Kawasho, Japan",
            company: "PREMIER RIDES INC.",
            image: "../../images/allamusements/kawasho.jpg"
        },
        {
            title: "Mad Cobra",
            placeName: "Suzuka Circuit",
            location: "Kawasho, Japan",
            company: "PREMIER RIDES INC.",
            image: "../../images/allamusements/kawasho1.jpg"
        },
        {
            title: "Mr. Freeze",
            placeName: "Six Flags St. Louis",
            location: "Missouri",
            company: "PREMIER RIDES INC.",
            image: "../../images/allamusements/mrfreeze.jpg"
        },
        {
            title: "Mr. Freeze",
            placeName: "Six Flags St. Louis",
            location: "Missouri",
            company: "PREMIER RIDES INC.",
            image: "../../images/allamusements/mrfreeze2.jpg"
        },
        {
            title: "Batman & Robin",
            placeName: "Six Flags Great Adventure",
            location: "New Jersey",
            company: "PREMIER RIDES INC.",
            image: "../../images/allamusements/Batman.jpg"
        },
        {
            title: "Batman & Robin",
            placeName: "Six Flags Great Adventure",
            location: "New Jersey",
            company: "PREMIER RIDES INC.",
            image: "../../images/allamusements/Batman1.jpg"
        },
        {
            title: "Desperado",
            placeName: "Whiskey Pete's",
            location: "Jean, Nevada",
            company: "ARROW DYNAMICS INC.",
            image: "../../images/allamusements/desperado1.jpg"
        },
        {
            title: "Desperado",
            placeName: "Whiskey Pete's",
            location: "Jean, Nevada",
            company: "ARROW DYNAMICS INC.",
            image: "../../images/allamusements/desperado.jpg"
        },
        {
            title: "Thunderation",
            placeName: "Silver Dollar City",
            location: "Branson, Missouri",
            company: "ARROW DYNAMICS INC.",
            image: "../../images/allamusements/thunderation.jpg"
        },
        {
            title: "Thunderation",
            placeName: "Silver Dollar City",
            location: "Branson, Missouri",
            company: "ARROW DYNAMICS INC.",
            image: "../../images/allamusements/thunderation.jpg"
        }

    ];
    $scope.transportations = [];
    $scope.industrials = [];
    $scope.currWorkArray = [];
    

    $scope.loadWorkPics = function () {
        if ($scope.currWorkType === 'Amusement') {
            for (var i = 0; i < $scope.amusements.length; i++) {
                $scope.currWorkArray.push($scope.amusements[i]);
            }
            $scope.currDescription = $scope.amusementDescription;
            $scope.currTitle = 'Amusement';
        } else {
            console.log("error in $scope.loadWorkPics maybe?");
        }
    }

    $scope.loadWorkPics();
});