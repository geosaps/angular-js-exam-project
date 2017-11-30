describe('Albums controller test', function() {
  beforeEach(module('musicApp'));
  var AlbumsController, scope, HTTP, createController;
  beforeEach(inject(function($controller, $rootScope, _httpService_) {
    scope = $rootScope.$new;
    HTTP = _httpService_;
    AlbumsController = $controller('AlbumsController', {
      $scope: scope,
      'HTTP': HTTP
    });
    createController = function() {
      return $controller('AlbumsController', {
        $scope: scope,
        'HTTP': HTTP
      });
    };
  }));
  it('is controller defined', function () {
    expect(AlbumsController).toBeDefined();
  });
  it('is controller has access to httpService', function () {
    expect(HTTP).toBeDefined();
  });
  it('check GET functions', function () {
    expect(HTTP.loadAllAlbums).toBeDefined();
    expect(HTTP.countAlbums).toBeDefined();
    HTTP.loadAllAlbums().then(function (data) {
        scope.albums = data;
        expect(scope.albums).toContain(data)
    });
    HTTP.countAlbums().then(function (data) {
        scope.count = data;
        expect(scope.count).toContain(data)
    });
  });
  it('check DELETE function', function () {
    expect(HTTP.deleteAlbum).toBeDefined();
  });
  it('check variables', function () {
    expect(scope.albums).toBeDefined();
    expect(scope.pages).toBeDefined();
    expect(scope.pageNumber).toBeDefined();
    expect(scope.pageToGo).toBeDefined();
    expect(scope.limit).toBeDefined();
    expect(scope.limitStart).toBeDefined();
    expect(scope.lastPage).toBeDefined();
  });
  it('check functions', function () {
    expect(scope.loadAlbums).toBeDefined();
    expect(scope.countAlbums).toBeDefined();
    expect(scope.setDelay).toBeDefined();
    expect(scope.deleteAlbum).toBeDefined();
  });
  it('check setting page function', function() {
    (function () {
      expect(scope.setPage).toBeDefined();
      scope.pages.length = 20;
      scope.setPage(7);
      expect(scope.pageNumber).toEqual(7);
    })();
  });  
  it('check setting navigation function', function() {
    (function () {
      expect(scope.setNavigation).toBeDefined();
      scope.filteredAlbums.length = 400;
      scope.setNavigation();
      expect(scope.pages.length).toEqual(20);
    })();  
  });
});