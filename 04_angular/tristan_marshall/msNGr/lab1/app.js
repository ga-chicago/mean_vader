var app = angular.module('lab1', []);

app.controller('HeaderController', ['$scope', function($scope) {
  $scope.mainTitle = 'Write a basic Angular App that uses expressions',
  $scope.tagLine = 'To List out attributes of a person'
  }]);

  app.controller('PersonController', ['$scope', function($scope) {
    $scope.persons =
  [
    {
      name: 'Gilbert Chesterson',
      occupation: 'General Manager of Cosco',
      car: '1980 Lincoln Continental',
      tattoos: 'Skull on fire with snake crawling out of eyes',
      favoriteBand: 'Lynyrd Skynyrd',
      maritalStatus: 'Married',
      favoriteBeer: 'Old English'
    }
  ]
}]);
