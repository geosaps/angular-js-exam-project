musicApp.factory('httpService', function($http) {
  var HTTP = {}
  //load all albums
  HTTP.loadAllAlbums = function () {
    return $http.get('/albums/all').then(function (res) {
      return res.data;
    }, function (err) {
        console.log('Error: ' + err.data);
    });
  };

  //count albums
  HTTP.countAlbums = function () {
    return $http.get('/albums/count').then(function(res) {
      return res.data;
    }, function(err) {
      console.log('Error: ' + err.data);
    });
  };

  //Delete album 
  HTTP.deleteAlbum = function (id) {
      $http.delete('/albums/delete/' + id).then(function () {
      }, function (err) {
          console.log('Error: ' + err.data);
      });
  };

  //Add new album
  HTTP.addNewAlbum = function (newAlbum) {
      $http({
          method: 'POST',
          url: '/albums/add',
          headers: {
            'Content-Type': 'application/json'
          },
          data: newAlbum
      }).then(function success() {
      }, function errorCallback(response) {
          console.log(response.data);
      });
  };

  //Edit album
  HTTP.editAlbum = function (newAlbum, id) {
      $http({
          method: 'POST',
          url: '/albums/update/' + id,
          headers: {
            'Content-Type': 'application/json'
          },
          data: newAlbum
      }).then(function success() {
      }, function errorCallback(response) {
          console.log(response.data);
      });
  };

  return HTTP;
});