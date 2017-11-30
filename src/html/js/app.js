'use strict'

var musicApp = angular.module('musicApp', ['ngRoute']);

musicApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : '/html/html/home.html'
    })
    .when('/albums/', {
      templateUrl : '/html/html/albums.html'
    })
    .when('/add', {
      templateUrl : '/html/html/add.html'
    })
    .otherwise({
      templateUrl : '/html/html/404.html'
    });
});

