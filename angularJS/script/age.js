var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {
    $scope.ShowInfo = function () {
        if ($scope.Namer == undefined) { alert('Please enter your name'); }
        else if ($scope.Dater == undefined) { alert('Please pick your DOB'); }
        else {
            $scope.NamerMod = 'Welcome ' + $scope.Namer + ',';
            var age = calculateAge($scope.Dater);
            if (age > -1 && age < 7)
                $scope.Info = 'Your are a kidoo';
            else if (age >= 7 && age < 14)
                $scope.Info = 'Your are an adolescent';
            else if (age >= 14 && age < 25)
                $scope.Info = 'Your are a young';
            else if (age >= 25 && age < 35)
                $scope.Info = 'Your are mature';
            else if (age >= 35 && age < 50)
                $scope.Info = 'Your are an aunt/uncle';
            else if (age >= 50)
                $scope.Info = 'Your are old';
            else
                $scope.Info = 'Bro you are not yet born';

            $scope.age = 'and your age is :' + age;

        }
    }
});
function calculateAge(birthdate) {
    var ageDifMs = Date.now() - birthdate.getTime();
    var ageDate = new Date(ageDifMs);
    return (ageDate.getUTCFullYear() - 1970);
}
