define(['angularAMD', 'angular', 'angular-ui-router','jquery'], function (angularAMD) {

	var app = angular.module('web', ['ui.router']);

	app.run(['$rootScope', function($rootScope){
		console.log('main module runs');
	}]);


	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home',{
				url:'/home',
				views:{
					content:angularAMD.route({
						templateUrl:'views/home/home.html',
						controllerUrl:'views/home/homeCtr.js',
					})
				}
			})
			.state('other',{
				url:'/other',
				views:{
					content:angularAMD.route({
						templateUrl:'views/other/other.html',
						controllerUrl:'views/other/otherCtrl.js'
					})
				}
			});

		$urlRouterProvider.otherwise('/');
	}]);

	return angularAMD.bootstrap(app);

});