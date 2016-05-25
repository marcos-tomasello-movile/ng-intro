/**
 * Created by Marcos Tomasello on 24/05/2016.
 */
angular.module('exampleModule', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'app/6-service/home.html'
            })
            .when('/details', {
                templateUrl: 'app/6-service/details.html'
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
    }])
    .service('GamesService', ['$http', function($http) {
            var self = this;
            var gamesListCache;

            self.getGames = function(onSuccess, onError) {
                if(gamesListCache) {
                    onSuccess(gamesListCache);
                } else {
                    console.log('Fetching from server');
                    $http.get('http://movilesc.com/api/games').then(function(response){
                        gamesListCache = response.data.games;
                        onSuccess(gamesListCache);
                    }, function(errResponse){
                        onError(errResponse.data);
                    });
                }
            };
    }]);
