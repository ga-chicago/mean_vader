var app = angular.module('appLab', []);

app.controller('TurtlesController', ['$scope', function($scope) {
	$scope.turtles = {
		leonardo: {
			color: 'blue',
			weapon: 'kitana sword',
			picture: 'http://www.teenagemutantninjaturtles.com/wp-content/uploads/2012/04/Leonardo-TMNT-movie-e1361224144926.jpg',
			killed: 0
		},
		donatello: {
			color: 'purple',
			weapon: 'bo',
			picture: 'http://www.teenagemutantninjaturtles.com/wp-content/uploads/2012/10/Donatello.jpg',
			killed: 0
		},
		raphael: {
			color: 'red',
			weapon: 'sai',
			picture: 'http://vignette3.wikia.nocookie.net/tmnt/images/0/0a/Raph_ch_pu2.png/revision/latest?cb=20140503235225',
			killed: 0
		},
		michelangelo: {
			color: 'orange',
			weapon: 'nun-chucks',
			picture: 'http://www.teenagemutantninjaturtles.com/wp-content/uploads/2012/04/Michelangelo-TMNT-2007-Movie-e1361299888830.jpg',
			killed: 0
		}
	};

	$scope.turtleNames = Object.keys($scope.turtles);

	$scope.killCount = function(turtle, count) {
		$scope.turtles[turtle].killed += count;
	};

}]);