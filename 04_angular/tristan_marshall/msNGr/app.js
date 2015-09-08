var app = angular.module('msNGr', []);

app.controller('HeaderController', ['$scope', function($scope) {
    $scope.title = 'msNGr',
    $scope.tagLine = "A messenger application"
}]);


app.controller('MessageController', ['$scope', function($scope) {
  $scope.messages =
  [
    {
      user: 'Tristan',
      date: new Date('2015', '09', '09'),
      image: 'http://shadowd20.pbworks.com/f/1222817238/Class-Barbarian.jpg',
      text: 'Backbone sucks',
      likes: 0
    },
    {
      user: 'Isaac the village fool',
      date: new Date('1649', '09', '09'),
      image: 'https://c2.staticflickr.com/8/7316/12843062193_1357746313.jpg',
      text: 'Isaac is stupid!',
      likes: 0
    }
  ],
  $scope.plusLike = function(index) {
    $scope.messages[index].likes += 1;
  };
  $scope.minusLike = function(index) {
    $scope.messages[index].likes -= 1;
  };
}]);
