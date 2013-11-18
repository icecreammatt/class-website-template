'use strict';

angular.module('classSite', ['classSite.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/',               {templateUrl: 'partials/home.html',      controller: 'Home'}).
        when('/:page',          {templateUrl: 'partials/home.html',      controller: 'Home'}).
        when('/lesson',         {templateUrl: 'partials/lesson.html',    controller: 'Lesson'}).
        when('/lesson/:id',     {templateUrl: 'partials/lesson.html',    controller: 'Lesson'}).
        when('/labs/:id',       {templateUrl: 'partials/labs.html',      controller: 'Lesson'});
  }]);

$(document).ready(function() {
    $(document).on('click',function() {
        $('.nav-collapse').collapse('hide');
    });
});
