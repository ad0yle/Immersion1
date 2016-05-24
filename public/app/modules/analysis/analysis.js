angular.module('itlp-analysis',[])
    .config(function($stateProvider) {
            $stateProvider
                .state('analysis', {
                    url: '/',
                    templateUrl: 'app/modules/analysis/analysis.html',
                    controller: 'AnalysisController'
                });
        })

    .controller('AnalysisController', function($scope){
    });