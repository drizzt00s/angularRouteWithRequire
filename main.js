require.config({
	baseUrl:'/',
	paths:{
		'angular':'./src/libs/angular',
		'jquery':'./src/libs/jquery-1.4.2',
		'angularAMD':'./src/libs/angularAMD',
		'ngload':'./src/libs/ngload',
		'angular-ui-router':'./src/libs/angular-ui-router'
		//'homeCtrl':'../views/home/homeCtrl.js',
		//'otherCtrl':'../views/other/otherCtrl.js'
	},
	shim:{

		"angular": { exports: "angular" },
		"angular-ui-router": ["angular"],
		"angularAMD": ["angular"],
		"ngload": ["angularAMD"]
		//'homeCtrl':['angular','webController'],
		//'otherCtrl':['angular','webController'],
	},
	 deps: ['application']
});