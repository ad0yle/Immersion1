angular.module('itlp-home',[])
    .config(function($stateProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/modules/home/home.html',
                    controller: 'HomeController'
                });
        })

    .controller('HomeController', function($scope){
        // Sweet Controller
        $scope.favorite_band = 'Backstreet Boys';
    });