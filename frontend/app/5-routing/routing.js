/**
 * Created by Marcos Tomasello on 24/05/2016.
 */
angular.module('exampleModule', [])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: '5-routing/home.html'
            })
            .when('/details/:id', {
                templateUrl: '5-routing/details.html'
            })
            .otherwise({redirectTo: '/'});
    }])
    .controller('MainController', [function() {
        var self = this;

        self.instDate = new Date().toISOString();
    }]);
