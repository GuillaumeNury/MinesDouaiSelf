angular.module('minesdouaiself')
  .controller('MainCtrl', ["$http", function($http) {
    this.hello = "Hey dude !";
    this.$http = $http;
    console.log($http);

    this.getSomethingOnAPI = function() {
      this.$http.get("/api").then(
        function(data) {
          console.log(data);
        },
        function(err) {
          console.log("erreur", err);
        }
      )
    }
  }
]);
