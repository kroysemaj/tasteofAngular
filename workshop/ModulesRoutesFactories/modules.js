var app = angular.module('gratefulDead', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'SimpleController',
        templateUrl: 'partials/view1.html'
      })
    .when('/view2',
      {
        controller: 'SimpleController',
        templateUrl: 'partials/view2.html'
      })
    .otherwise({ redirectTo: '/' });

});


app.controller("SimpleController", function($scope){

  $scope.theDead = [
    {name: 'Jerry Garcia', instrument: 'guitar, vocals'},
    {name: 'Bob Weir', instrument: 'guitar, vocals'},
    {name: 'Ron \'Pigpen\' McKernan', instrument: 'keyboards, harmonica, vocals'},
    {name: 'Phil Lesh', instrument: 'bass, vocals'},
    {name: 'Bill Kreutzmann', instrument: 'drums'}
  ];

  $scope.addBandmate = function () {
    console.log($scope.theDead);
    $scope.theDead.push({name: $scope.newBandmate.name, instrument: $scope.newBandmate.instrument})
    console.log($scope.theDead);
  };

});