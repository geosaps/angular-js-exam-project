musicApp.controller('AddAlbumController', function ($scope, $location, httpService) {

var newAlbum = {};


    //add album
    $scope.addAlbum = function(x) {
      newAlbum.title = $scope.newTitle;
      newAlbum.artist = $scope.newArtist;
      newAlbum.country = $scope.newCountry;
      newAlbum.company = $scope.newCompany;
      newAlbum.price = $scope.newPrice;
      newAlbum.year = $scope.newYear;
      if ($scope.newLogoUrl === undefined) {
        newAlbum.logoUrl = "";
      } else {
        newAlbum.logoUrl = $scope.newLogoUrl;
      }
      httpService.addNewAlbum(newAlbum);
    };

    $scope.go = function() {

        $location.path("/albums");

    };

});