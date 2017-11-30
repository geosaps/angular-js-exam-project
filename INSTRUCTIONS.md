# AngularJS exam project

## Technologies used

 - [AngularJS](https://angularjs.org/)
 - [Twitter Bootstrap](http://getbootstrap.com/)
 - [Underscore.js](http://underscorejs.org/)
 - [Karma](https://karma-runner.github.io/)
 - [Jasmine](https://jasmine.github.io/)

## Description

Single page application that allows you to add, edit and delete music albums.

## Application details

- Albums controller with service calls and navigation logic.
- Single album controller with album interface functionality.
- Add album controller to add new albums.
- HTTP provide factory with http logic. 
- Unit-tests for every component of the application.
- Fully responsive web-application.

## Application instructions

On the home page you can click the button to go to the albums library.
Basic library page loads 20 albums. You can load other albums using navigation buttons. 
All albums actions can be performed using the buttons which are present in each album. 
You can use the search field which is present on the top of a page. 
All test are provided by Karma + Jasmine. You can run them by the console. 

## How to run

To install dependencies
```
npm install
```
To start tests and server
```
grunt start
```
To start only tests
```
grunt test
```
To start only server
```
grunt start_server
```
