angular.module('itlp-navbar',[])
    .directive('geNavbar', function(){
        return {
            restrict: 'E',
            templateUrl: 'app/modules/navbar/navbar.html',
            controller: 'NavbarController'
        };
    })
    
    .controller('NavbarController', function($scope){

    })
    
    .directive('geFooter', function(){
        return {
            restrict: 'E',
            templateUrl: 'app/modules/navbar/footer.html',
            controller: 'FooterController'
        };
    })

    .controller('FooterController', function($scope){

    });
