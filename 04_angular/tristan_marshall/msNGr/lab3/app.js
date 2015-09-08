var app = angular.module('lab3', []);

app.controller('HeaderController', ['$scope',
function($scope) {
  $scope.title = 'lab3',
  $scope.tagLine = 'Teenage Mutant Ninja Turtles!'
}]);

app.controller('MutantController', ['$scope', function($scope) {
  $scope.mutants =
  [
    {
      image: 'http://www.teenagemutantninjaturtles.com/wp-content/uploads/2012/04/Leonardo-2003-cartoon.jpg',
      name: 'Leonardo',
      color: 'Blue',
      weapon: 'Katanas',
      kills: 0
    },
    {
      image: 'http://www.shoemycolor.com/media/wysiwyg/micha.jpg',
      name: 'Michelangelo',
      color: 'Orange',
      weapon: 'Nunchucks',
      kills: 0
    },
    {
      image: 'http://images.sodahead.com/polls/003213325/1824733070_profile_raphael_answer_4_xlarge.png',
      name: 'Raphael',
      color: 'Red',
      weapon: 'Sai',
      kills: 0
    },
    {
      image: 'http://img1.wikia.nocookie.net/__cb20130523111808/adventuretimewithfinnandjake/images/d/d3/Ninja_Turtle_Donatello_4.gif.png',
      name: 'Donatello',
      color: 'Purple',
      weapon: 'Bo staff',
      kills: 0
    },
  ],
  $scope.plusKill = function(index) {
    $scope.mutants[index].kills += 1;
  };
}]);
