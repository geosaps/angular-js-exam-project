describe('Add album controller test', function() {
  beforeEach(module('musicApp'));
  var AddAlbumController, scope, HTTP, location, createController;
  beforeEach(inject(function(_$location_, $controller, $rootScope, _httpService_) {
    scope = $rootScope.$new;
    HTTP = _httpService_;
    location = _$location_;
    AddAlbumController = $controller('AddAlbumController', {
      $scope: scope,
      'HTTP': HTTP
    });
    createController = function() {
      return $controller('AddAlbumController', {
        $scope: scope,
        'HTTP': HTTP
      });
    };
  }));
  it('is controller defined', function () {
    expect(AddAlbumController).toBeDefined();
  });
  it('is controller has access to httpService', function () {
    expect(HTTP).toBeDefined();
  });
  it('check POST function', function () {
    expect(HTTP.addNewAlbum).toBeDefined();
  });
  it('check functions', function () {
    expect(scope.addAlbum).toBeDefined();
    expect(scope.go).toBeDefined();
  });
  it('check go function', function() {
    spyOn(location, 'path');   
    scope.go(); 
    expect(location.path).toHaveBeenCalledWith('/albums');
  });
});