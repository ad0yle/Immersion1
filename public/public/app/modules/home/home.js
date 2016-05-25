angular.module('itlp-home',[])
    
    .config(function($stateProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/modules/home/home.html',
                    controller: 'HomeController'
                });
        })

    .controller('HomeController', function($scope,$http){
        $scope.check_credentials = function () {

        var request = $http({
            method: "get",
            url: "http://54.172.213.210/middleware/getData.php"
        });

        request.success(function (data) {
            var response = data;
            var rows = response.split('/n');
            var cells = [];
            
            for (var i = 0; i < rows.length; i++) {
                var temp = rows[i].split(',');
                for (var c = 0; c < temp.length; c++) {
                    cells.push(temp[c]);
                }
            }
            for (var count = 0; count < rows.length; count++) {
            console.log(rows[count]);
            var table = document.getElementById("data_table").insertRow(count+1);
                for (var count2 = 0; count2 < 9; count2++) {
                    var temp =table.insertCell(count2);
                    temp.innerHTML = cells[count2];
                }
            }
            
        });
        }
    });

