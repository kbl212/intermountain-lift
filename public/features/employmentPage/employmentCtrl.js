var app = angular.module('intermountain-lift');


app.controller('employmentCtrl', function ($scope, $http) {

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


    $scope.isValidEmail = false;

    $scope.isEmail = function (email) {
        var returnVal = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(email);
        $scope.isValidEmail = returnVal;
        return returnVal;
    }

    $scope.sendEmail = function () {
        $http({
            method: "POST",
            url: "send_mail.php",
            data: {
                clientName: $scope.emailName,
                email: $scope.emailSubject,
                subject: $scope.emailSubject,
                message: $scope.emailMessage
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).success(function (result) {
            console.log('SUCCESS', result);
        }).error(function (result) {
            console.log('failure...');
        })

    };

    $scope.emailSubmit = function () {
        if ($scope.emailName && $scope.isValidEmail && $scope.emailSubject && $scope.emailMessage) {
            $scope.sendEmail();
        } else if (!$scope.isValidEmail) {
            alert("Please enter a valid email address");
        } else {
            alert("Please fill out all required fields");
        }
        $scope.emailName = "";
        $scope.emailAddress = "";
        $scope.emailSubject = "";
        $scope.emailMessage = "";
        $scope.isValidEmail = false;

    }
});