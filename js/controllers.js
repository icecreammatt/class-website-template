'use strict';

angular.module('classSite.controllers', []).

  controller('Home', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    var page = $routeParams.page || 'home';
    var url = 'content/' + page + '.md';

    $http.get(url).success(function(data) {
      var converter = new Showdown.converter();
      $scope.details = converter.makeHtml(data);
    }).error(function() {
      $scope.details = '<p>Invalid Page</p>';
    });

  }]).

  controller('Lesson', ['$scope', '$routeParams', '$http' ,function($scope, $routeParams, $http) {

    $http.get('content/lessons/' + $routeParams.id + '.md').success(function(data) {
      var converter = new Showdown.converter();
      $scope.details = converter.makeHtml(data);
    }).error(function(){
      $scope.details = '<p>Coming soon...</p>'
    });

  }]).

  controller('Labs', ['$scope', '$routeParams', '$http' ,function($scope, $routeParams, $http) {

    $http.get('content/labs/' + $routeParams.id + '.md').success(function(data) {
      var converter = new Showdown.converter();
      $scope.details = converter.makeHtml(data);
    }).error(function(){
      $scope.details = '<p>Coming soon...</p>'
    });

  }]).

  controller('Navigation', ['$scope', '$http', function($scope, $http) {
    $http.get('lectures.json').success(function(data) {
      $scope.lectures = data.lectures;
    })
    $http.get('labs.json').success(function(data) {
      $scope.labs = data.labs;
    })
  }]);