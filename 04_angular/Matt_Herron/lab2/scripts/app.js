var app = angular.module('appLab', []);

app.controller('HomeController', ['$scope', function($scope) {
	$scope.todoList = [
		{
			task: 'take out the garbage',
			due: new Date(2015, 8, 13, 12, 0, 0),
			completed: false
		},
		{
			task: 'do laundry',
			due: new Date(2015, 8, 14, 23, 0, 0),
			completed: false
		},
		{
			task: 'buy flowers for wife',
			due: new Date(2015, 8, 20, 20, 30, 0),
			completed: false
		},
		{
			task: 'learn more AngularJS',
			due: new Date(2015, 9, 2, 11, 45, 0),
			completed: false
		}
	];
}]);