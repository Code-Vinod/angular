app.controller('newController', function ($scope) {
    $scope.ShowNewName = function () {
        //$scope.NewName=$scope.Namer;
        var NewName = $scope.Namer;
        NewName = NewName.replaceAll('a', '@');
        NewName = NewName.replaceAll('s', '$');
        NewName = NewName.replaceAll('e', 'E');
        NewName = NewName.replaceAll('m', '/\\/\\');
        NewName = NewName.replaceAll('d', '!)');
        NewName = NewName.replaceAll('c', '<');
        NewName = NewName.replaceAll('f', '!=');
        NewName = NewName.replaceAll('i', '!');
        $scope.NewName = NewName;
    }

});
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
