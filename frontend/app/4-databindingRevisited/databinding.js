/**
 * Created by Marcos Tomasello on 24/05/2016.
 */
angular.module('exampleModule', [])
    .controller('MainController', [function() {
        var self = this;

        self.comments = [];

        self.addCommment = function(comment) {
            self.comments.push(comment);
            self.newComment = "";
        }
    }]);
