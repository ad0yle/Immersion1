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
    				Highcharts.chart('chart', {

				    xAxis: {
				        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
				            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
				    },

				    series: [{
				        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
				    }]
				});
    
    });