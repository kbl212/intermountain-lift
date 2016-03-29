var app = angular.module('intermountain-lift');


app.controller('employmentCtrl', function($scope) {
    
    $scope.currentPositions = [
        {
            title: "Welders",
            status: "Now Hiring!",
            description: "Experience welding in the 3G or 5G positions, using overhead cranes, forklifts, and various fabrication equipment. Be able to pass a 3G and/or 5G weld test using the FCAW process (Dual Shield/flux cored wire). Need personal tools and good work ethics."
        },
        {
            title: "Fitters",
            status: "Now Hiring!",
            description: "Experience fabricating and interpreting complex drawings. Experience using overhead cranes, forklifts, and various fabrication equipment. Be able to pass a 3G weld test using the FCAW process (Dual Shield/flux cored wire). Need personal tools and good work ethics."
        },
        {
            title: "Painters",
            status: "Now Hiring!",
            description: "At least one year experience and working knowledge of industrial paint processes. Airless with air assist paint delivery system. Experience using overhead cranes and forklifts. Need personal tools and good work ethics."
        },
        {
            title: "Saw Operators & Helpers",
            status: "Accepting applications!",
            description: 'Entry level position, filled on an "as needed" basis.'
        }
    ]
    
});