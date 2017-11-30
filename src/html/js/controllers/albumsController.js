musicApp.controller('AlbumsController', function ($scope, $timeout, httpService) {

    var http = httpService;
    $scope.albums = [];
    $scope.pages = [];
    $scope.filteredAlbums = $scope.albums;


    //loading all albums
    $scope.loadAlbums = function() {
      http.loadAllAlbums().then(function(data) {
        $scope.albums = _.toArray(data);
        $scope.albumPages = $scope.albums.length/20;
        for (var i = 1; i < $scope.albumPages + 1 ; i++) {
          $scope.pages.push(i);
        }
        $scope.filteredAlbums = $scope.albums;
      });
    };
    $scope.loadAlbums();
    
    //count all albums
    $scope.countAlbums = function() {
      http.countAlbums().then(function(data) {
        $scope.count = data;
      });
    };
    $scope.countAlbums();

    //set page number and albums limit
    $scope.pageNumber = 1;
    $scope.pageToGo = 1;
    $scope.limit = 20;
    $scope.limitStart = 0; 
    $scope.lastPage = false;

    $scope.setPage = function(x) {
      if ( x >= 1 && x <= $scope.pages.length ) {
        
        $scope.pageNumber = x;
        $scope.limit = 20*$scope.pageNumber;
        $scope.limitStart = $scope.limit - 20;
        if (x === $scope.pages.length) {
          $scope.lastPage = true;
        } else {
          $scope.lastPage = false;
        }
      }
    };

    //set delay on phones
    $scope.setDelay = function() {
      $scope.setPage(1);
      setTimeout(function() {
        $scope.setNavigation($scope.filteredAlbums.length);
        $scope.setPage(1);
      }, 100);
    };


    //set number of navigation pages
    $scope.setNavigation = function(x) {
        $scope.pages = [];
        $scope.albumPages = x/20;
        for (var i = 1; i < $scope.albumPages + 1; i++) {
          $scope.pages.push(i);
        }
        if ($scope.pageNumber > $scope.pages.length) {
          $scope.setPage(1);
        }
    };

    //delete album
    $scope.deleteAlbum = function(id) {
      http.deleteAlbum(id);
      $scope.setNavigation($scope.albums - 1);
      $timeout($scope.loadAlbums, 100);
      $scope.countAlbums();
    };
});
