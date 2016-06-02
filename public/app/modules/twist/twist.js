angular.module('itlp-twist',[])
    
    .config(function($stateProvider) {
            $stateProvider
                .state('twist', {
                    url: '/',
                    templateUrl: 'app/modules/twist/twist.html',
                    controller: 'TwistController'
                });
        })

    .controller('TwistController', function($scope,$http){
        $scope.check_credentials = function () {

        var request = $http({
            method: "get",
            url: "http://54.197.18.215/middleware/getData.php"
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
            var table = document.getElementById("twist_table").insertRow(count+1);
                for (var count2 = 0; count2 < 10; count2++) {
                    if (count2==9) {
                       var temp = table.insertCell(count2);
                       temp.innerHTML = "<button class = 'update_buttons' onClick='(this.id)' id = '" + count + "'>Edit</button>"; 
                        console.log("ROW: " + count);
                    } else {
                    var temp =table.insertCell(count2);
                    //temp.innerHTML = "<input type='text' value = '" + cells[count2] + "'></input>";
                    temp.innerHTML = cells[count2];
                    }
                }
            }
            
            $( ".update_buttons" ).click(function(e) {
                
              var currentTD = $(this).parents('tr').find('td');
                
                if ($(this).html() == 'Edit') {
                  currentTD = $(this).parents('tr').find('td');
                  $.each(currentTD, function () {
                      $(this).prop('contenteditable', true);
                      for (var i = 0; i < currentTD.length; i++) {
                        currentTD[i].style.backgroundColor = "#FFFF00";
                      }
                  });   
              
                } else {
                 $.each(currentTD, function () {
                      $(this).prop('contenteditable', false);
                      for (var i = 0; i < currentTD.length; i++) {
                        currentTD[i].style.backgroundColor = "#FFF";
                      }
                  });
              }
                
            $(this).html($(this).html() == 'Edit' ? 'Save' : 'Edit')
                
                //var SendButton = $(e.target);
                //var row_num = SendButton.attr('id');
                //alert(SendButton.attr('id'));
                //$("tr:nth-child(3)").css('color', 'red');
                //alert(SendButton.innerHTML );
            });
            
        });
        }
    });

