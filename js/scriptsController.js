var app = angular.module('routeApp', ['ui.bootstrap','ngRoute']);
	
app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: 'template/home.html'
		})
		.when("/portfolio", {
			templateUrl: 'template/portfolio.html'
		})
		.when("/aboutMe", {
			templateUrl: "template/aboutMe.html"
		})
		.when("/blog", {
			templateUrl: "template/blog.html"
		})
});

app.controller("getQuote", function($scope, $http) {
	$http.get("quote.json")
	.success(function(data){
		$scope.quotes = data;
		console.log($scope.quotes);
	});
});

app.controller("getRandomNumber", function($scope, $interval) {
	$scope.randomNumber = 0;
	function update(){
		$scope.randomNumber = Math.round((Math.random() *8)+0);
	}
	$interval(update, 1000*10)
});