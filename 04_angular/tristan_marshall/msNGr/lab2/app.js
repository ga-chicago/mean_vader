var app = angular.module('lab2', []);

app.controller('HeaderController', ['$scope', function($scope) {
    $scope.title = 'lab2',
    $scope.tagLine = 'To Do list'
}]);

app.controller('TodoController', ['$scope', function($scope) {
  $scope.todos =
  [
    {
      toDo: 'Go Grocery Shopping',
      date: new Date('2015', '09', '01'),
      whenDue: 'Three days',
      category: 'Home'
    },
    {
      toDo: 'Mow yard',
      date: new Date('2015', '09', '01'),
      whenDue: '5 days',
      category: 'Yard'
    },
  ]
}]);
