var app = angular.module('labApp', []);

app.controller('HomeController', ['$scope', function($scope) {
	$scope.person = {
		name: 'Taco', 
		age: 40,
		occupation: 'Taco Corp',
		product: 'Eskimo Brothers Database',
		favorites: ['eskimo brother documentation', 'fantasy football', 'smoking ganja']
	}
}]);