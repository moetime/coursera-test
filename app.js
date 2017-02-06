(function () {
    'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope){

$scope.name = "Morrice";
$scope.sayHello = function (){

    return "Hello Snicker Dooddle";
}

});

})();
