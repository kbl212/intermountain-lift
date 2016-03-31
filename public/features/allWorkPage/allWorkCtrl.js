var app = angular.module('intermountain-lift');


app.controller('allWorkCtrl', function ($scope, allWorkService) {
    $scope.retrieveWorkType = function () {
        $scope.currWorkType = allWorkService.retrieveWorkType();
    }

    $scope.retrieveWorkType();

    $scope.amusementDescription = "As amusement rides continue to become more sophisticated and more technical, designs demand a greater amount of highly complex production. Intermountain Lift understands the dynamic nature of this specialized field. Years of experience in producing amusement ride steel construction enable intermountain lift to work with engineers to build the safest, most precise structures possible. Take a look.";
    
    $scope.transportationDescription = "Transit vehicle steel fabrication is another area in which Intermountain Lift excels. Working with many of the nation's leading transit manufacturing companies, Intermountain Lift has produced numerous steel composite structures, chassis, and undercarriages. Our commitment to meeting rigid standards has earned us a reputation as a leader in the industry. Take a look."
    
    $scope.industrialDescription = "Intermountain Lift also has experience in producing a wide variety of specialized projects. From manufacturing cranes to pollution control systems, Intermountain Lift has successfully produced specialized steel and alloy metal structures to the highest specifications for a number of industries. Take a look."

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
            image: "../../images/allamusements/SSFT_poltergiest.jpg"
        },
        {
            title: "Poltergeist",
            placeName: "Six Flags Fiesta Texas",
            location: "San Antonio, Texas",
            company: "PREMIER RIDES INC.",
            image: "../../images/allamusements/SSFT_poltergiest1.jpg"
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
            image: "../../images/allamusements/thunderation1.jpg"
        }

    ];
    $scope.transportations = [
        {
            title: "People Mover",
            placeName: "Cincinnati Airport",
            location: "Cincinnati, Ohio",
            company: "OTIS ELEVATOR CO.",
            image: "../../images/alltransportations/airport.jpg"
        },
        {
            title: "People Mover",
            placeName: "Universal Studios",
            location: "Orlando, Florida",
            company: "ARROW DYNAMICS INC.",
            image: "../../images/alltransportations/universal.jpg"
        },
        {
            title: "People Mover Undercarriage",
            placeName: "Getty Museum",
            location: "Santa Monica, California",
            company: "AEROTRANS",
            image: "../../images/alltransportations/undercarriage.jpg"
        },
        {
            title: "People Mover",
            placeName: "Getty Museum",
            location: "Orlando, Florida",
            company: "AEROTRANS",
            image: "../../images/alltransportations/getty.jpg"
        }
    ];
    $scope.industrials = [
        {
            title: "MGM Gardern Wall",
            placeName: "Architectural Steel",
            location: "City Center Las Vegas, NV",
            company: "SME STEEL INC.",
            image: "../../images/allindustrials/citycenter365.jpg"
        },
        {
            title: "MGM Gardern Wall",
            placeName: "Architectural Steel",
            location: "City Center Las Vegas, NV",
            company: "SME STEEL INC.",
            image: "../../images/allindustrials/citycenter366.jpg"
        },
        {
            title: "MGM Gardern Wall",
            placeName: "Architectural Steel",
            location: "City Center Las Vegas, NV",
            company: "SME STEEL INC.",
            image: "../../images/allindustrials/citycenter367.jpg"
        },
        {
            title: "MGM Gardern Wall",
            placeName: "Architectural Steel",
            location: "City Center Las Vegas, NV",
            company: "SME STEEL INC.",
            image: "../../images/allindustrials/citycenter368.jpg"
        },
        {
            title: "Precipitator",
            placeName: "Monsanto",
            location: "Idaho Springs, ID",
            company: "MONSANTO CO.",
            image: "../../images/allindustrials/Precipitator-1.jpg"
        },
        {
            title: "Precipitator",
            placeName: "Monsanto",
            location: "Idaho Springs, ID",
            company: "MONSANTO CO.",
            image: "../../images/allindustrials/Precipitator-2.jpg"
        },
        {
            title: "Harmon Building Canopy",
            placeName: "Architectural Steel",
            location: "City Center Las Vegas NV",
            company: "SME STEEL INC.",
            image: "../../images/allindustrials/harmon1.jpg"
        },
        {
            title: "Decorative Monorail Enclosure",
            placeName: "Disneyland",
            location: "Anaheim, California",
            company: "SCHUFF STEEL COMPANY",
            image: "../../images/allindustrials/disneyland1.jpg"
        },
        {
            title: "Stainless Steel Scrub Tanks & Venturies",
            placeName: "",
            location: "Green River, Wyoming",
            company: "FMC CORPORATION",
            image: "../../images/allindustrials/fmc.jpg"
        },
        {
            title: "Stainless Steel Venturie",
            placeName: "",
            location: "Green River, Wyoming",
            company: "FMC CORPORATION",
            image: "../../images/allindustrials/ssventurie.jpg"
        },
        {
            title: "Dust Collectors",
            placeName: "Tampella Power",
            location: "Sunnyside, Utah",
            company: "AMEREX, INC.",
            image: "../../images/allindustrials/tampella.jpg",
        },
        {
            title: "Gantry Craneway",
            placeName: "",
            location: "Vineyard, Utah",
            company: "",
            image: "../../images/allindustrials/geneva.jpg"
        },
        {
            title: "Arch",
            placeName: "",
            location: "",
            company: "S&S POWER INC.",
            image: "../../images/allindustrials/arch.jpg"
        },
        {
            title: "Control Pulpit",
            placeName: "",
            location: "",
            company: "NUCOR STEEL",
            image: "../../images/allindustrials/controlpulpit.jpg"
        },
        {
            title: "Crane Trolly",
            placeName: "",
            location: "",
            company: "US STEEL",
            image: "../../images/allindustrials/cranetrolly.jpg"
        },
        {
            title: "Swing Arm",
            placeName: "Laddle Mover",
            location: "",
            company: "PACIFIC STATES CAST IRON",
            image: "../../images/allindustrials/swingarm.jpg"
        }
    ];
    $scope.currWorkArray = [];
    

    $scope.loadWorkPics = function () {
        if ($scope.currWorkType === 'Amusement') {
            for (var i = 0; i < $scope.amusements.length; i++) {
                $scope.currWorkArray.push($scope.amusements[i]);
            }
            $scope.currDescription = $scope.amusementDescription;
            $scope.currTitle = 'Amusement';
            //Used to change which button looks active.
            $scope.amusementSelect = "active-work";
            $scope.transportationSelect = "inactive-work";
            $scope.industrialSelect = "inactive-work";
        } 
        else if ($scope.currWorkType === 'Transportation') {
            for (var i = 0; i < $scope.transportations.length; i++) {
                $scope.currWorkArray.push($scope.transportations[i]);
            }
            $scope.currDescription = $scope.transportationDescription;
            $scope.currTitle = 'Transportation';
            
            $scope.amusementSelect = "inactive-work";
            $scope.transportationSelect = "active-work";
            $scope.industrialSelect = "inactive-work";
        }
        else if ($scope.currWorkType === 'Industrial') {
            for (var i = 0; i < $scope.industrials.length; i++) {
                $scope.currWorkArray.push($scope.industrials[i]);
            }
            $scope.currDescription = $scope.industrialDescription;
            $scope.currTitle = 'Industrial and Commercial';
            
            $scope.amusementSelect = "inactive-work";
            $scope.transportationSelect = "inactive-work";
            $scope.industrialSelect = "active-work";
        }
        $scope.currPhoto = $scope.currWorkArray[0];
    }
    
    $scope.changeCurrPhoto = function(indexIn) {
        $scope.currPhoto = $scope.currWorkArray[indexIn];
    }
    $scope.changeCurrWorkType = function(typeIn) {
        $scope.currWorkArray = [];
        $scope.currWorkType = typeIn;
    }
    $scope.loadWorkPics();
});