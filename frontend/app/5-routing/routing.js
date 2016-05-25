/**
 * Created by Marcos Tomasello on 24/05/2016.
 */
angular.module('exampleModule', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'app/5-routing/home.html'
            })
            .when('/details', {
                templateUrl: 'app/5-routing/details.html'
            })
            .otherwise({redirectTo: '/'});
    }])
    .controller('MainController', [function() {
        var self = this;

        self.instDate = new Date().toISOString();
    }])
    .controller('HomeController', ['$location', function($location) {
        var self = this;

        self.instDate = new Date().toISOString();

        self.goDetails = function() {
            $location.path("/details");
        }
    }])
    .controller('DetailsController', ['$location', function($location) {
        var self = this;

        self.instDate = new Date().toISOString();

        self.goHome = function() {
            $location.path("/");
        }
    }]);
