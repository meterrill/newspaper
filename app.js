var newspaperBeats = angular.module('newspaperBeats', ['ui.router']);

newspaperBeats.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('beats', {
    url: "/beats",
    templateUrl: "partials/beats.html",
    controller: 'BeatsCtrl'
  });

  $stateProvider.state('beats.reporters', {
    url: "/:beatId",
<<<<<<< HEAD
    templateUrl: "partials/beats.reporters.html",
=======
    templareUrl: "partials/beats.reporters.html",
>>>>>>> c728d69... create state/template for 'beats.reporters'
    controller: 'ReportersCtrl'
  });
});
