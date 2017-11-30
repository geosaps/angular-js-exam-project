describe('Single album controller test', function() {
  beforeEach(module('musicApp'));
  var SingleAlbumController, scope, HTTP, createController;
  beforeEach(inject(function($controller, $rootScope, _httpService_) {
    scope = $rootScope.$new;
    HTTP = _httpService_;
    SingleAlbumController = $controller('SingleAlbumController', {
      $scope: scope,
      'HTTP': HTTP
    });
    createController = function() {
      return $controller('SingleAlbumController', {
        $scope: scope,
        'HTTP': HTTP
      });
    };
  }));
  it('is controller defined', function () {
    expect(SingleAlbumController).toBeDefined();
  });
  it('is controller has access to httpService', function () {
    expect(HTTP).toBeDefined();
  });
  it('check POST function', function () {
    expect(HTTP.editAlbum).toBeDefined();
  });
  it('check variables', function () {
    expect(scope.showDelete).toBeDefined();
    expect(scope.showEdit).toBeDefined();
    expect(scope.showDontSave).toBeDefined();
    expect(scope.showSave).toBeDefined();
  });
  it('check edit album function', function () {
    expect(scope.editAlbum).toBeDefined();
  });
  it('check show/hide delete section function', function() {
    (function () {
      expect(scope.showHideDeleteSection).toBeDefined();
      expect(scope.showDelete).toBeFalsy();
      scope.showHideDeleteSection();
      expect(scope.showDelete).toBeTruthy();
      scope.showHideDeleteSection();
      expect(scope.showDelete).toBeFalsy();
    })();
  }); 
  it('check show/hide delete section function', function() {
    (function () {
      expect(scope.showHideEditSection).toBeDefined();
      expect(scope.showEdit).toBeFalsy();
      scope.showHideEditSection();
      expect(scope.showEdit).toBeTruthy();
      scope.showHideEditSection();
      expect(scope.showEdit).toBeFalsy();
    })();
  }); 
  it('check show/hide delete section function', function() {
    (function () {
      expect(scope.showHideDontSaveSection).toBeDefined();
      expect(scope.showDontSave).toBeFalsy();
      scope.showHideDontSaveSection();
      expect(scope.showDontSave).toBeTruthy();
      scope.showHideDontSaveSection();
      expect(scope.showDontSave).toBeFalsy();
    })();
  }); 
  it('check show/hide delete section function', function() {
    (function () {
      expect(scope.showHideSaveSection).toBeDefined();
      expect(scope.showSave).toBeFalsy();
      scope.showHideSaveSection();
      expect(scope.showSave).toBeTruthy();
      scope.showHideSaveSection();
      expect(scope.showSave).toBeFalsy();
    })();
  }); 
});