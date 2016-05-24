
angular.module('exampleModule', [])
    .controller('RegisterController', [function() {
        var self = this;

        self.newUser = {};

        self.register = function() {
            alert("Registering user: " + JSON.stringify(self.newUser, null, 4));
        }
     }]);