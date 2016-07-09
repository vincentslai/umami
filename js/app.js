var app = angular.module('zip', ['ngRoute']) 

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'template/home.html'
	})
	.when('/second/:name', {
		templateUrl: 'template/second.html',
		controller: 'zipSecond'
	})
	.otherwise({
		template: '<h4 class="brown">404 Page not found</h4>'
	})
});

app.controller('leadsPage', function($scope, $location){
	$scope.submit = function(){
		 var name1 = $scope.name;
		// var add1 = $scope.address;
		$location.path('/second/' + name1 );
	}
});

app.controller('zipSecond', function($scope, $routeParams){
	var zipN = $routeParams.name;

	if(angular.isNumber(+zipN)){
		$scope.model =  { message: zipN};
	} else  {
		$scope.model ={message: "undefined"};
	}

	//$scope.zipNumber = angular.isNumber($routeParams.name);
	
	//$scope.model =  { message: $scope.zipNumber};

	// $scope.$watch("zipNumber", function(){
	// 	if($scope.zipNumber ==false){
	// 		$scope.model={ message:"Date:" + $routeParams.name};

	// 	} else {
	// 		$scope.model={ message:"Invalid"};
	// 	}
	// })
	// if($scope.zipNumber == true){
	 	//$scope.model={ message:"Date:" + $routeParams.name};
	// }
	// $scope.model={
	//  	message:"Zip Code: " + $routeParams.name
	//  }

});


app.controller('songsCtrl', function($scope){
	$scope.list = [{Author:'Mike Posner', Title:'I took a pill in Ibiza'}, 
					{Author:'DJ Snake', Title:'Middle'},
					{Author:'Alan Walker', Title:'Faded'},
					{Author:'DNCE', Title:'Cake by the Ocean'},
					{Author:'One Republic', Title:'Wherever I go'}
					];
	
	$scope.addSinger = function(){
		$scope.list.push({Author:$scope.singerName, Title:$scope.songName});
		$scope.singerName ="";
		$scope.songName ="";
	};	
});

app.controller('associateCtrl', function($scope){
	$scope.toggle =false;

	$scope.associates = [{Name:'Mike', Age:29}, 
					{Name:'Steve', Age:22},
					{Name:'Alan', Age:56},
					{Name:'Jonathan', Age:36},
					{Name:'Mary', Age:43},
					{Name:'Peter', Age:16},
					{Name:'Jennifer', Age:30},
					{Name:'Kate', Age:61},
					{Name:'Zack', Age:15}
					];
	$scope.addAssociates = function(){
		$scope.associates.push({Name:$scope.name, Age:$scope.age});
		$scope.name ="";
		$scope.age ="";
	};

});