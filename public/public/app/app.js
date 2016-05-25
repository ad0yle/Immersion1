angular.module('itlpportal',
    [ 'ui.router', 'itlp-navbar', 'ui.bootstrap', 'itlp-home','itlp-analysis'])
.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
})

// Fixes bug https://github.com/angular-ui/ui-router/issues/948 in ui.router.
.run(function($rootScope, $state) {
	$rootScope.$on('$stateChangeStart', function(evt, to, params) {
    	//console.log(evt,to,params);
        if (to.redirectTo) {
        	evt.preventDefault();
        	$state.go(to.redirectTo, params);
      	}
    });
});

var app = angular.module('angular_post_demo', []);

