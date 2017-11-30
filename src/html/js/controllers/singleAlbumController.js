musicApp.controller('SingleAlbumController', function ($scope, httpService) {
    //show or hide delete section
    $scope.showDelete = false;
    $scope.showHideDeleteSection = function() {
      $scope.showDelete = !$scope.showDelete;
    }


    //show or hide edit section
    $scope.showEdit = false;
    $scope.showHideEditSection = function() {
      $scope.showEdit = !$scope.showEdit;
      console.log($scope.showEdit);
    }

    //show or hide don't save section
    $scope.showDontSave = false;
    $scope.showHideDontSaveSection = function() {
      $scope.showDontSave = !$scope.showDontSave;
    }

    //show or hide save section
    $scope.showSave = false;
    $scope.showHideSaveSection = function() {
      $scope.showSave = !$scope.showSave;
    }

    //edit album
    var updatedAlbum = {};
    $scope.editAlbum = function(id) {
      updatedAlbum.title = $scope.album.title;
      updatedAlbum.artist = $scope.album.artist;
      updatedAlbum.country = $scope.album.country;
      updatedAlbum.company = $scope.album.company;
      updatedAlbum.price = $scope.album.price.toString();
      updatedAlbum.year = $scope.album.year.toString();
      if ($scope.album.logoUrl === undefined) {
        updatedAlbum.logoUrl = "";
      } else {
        updatedAlbum.logoUrl = $scope.album.logoUrl;
      }

      httpService.editAlbum(updatedAlbum, id);
    }
});