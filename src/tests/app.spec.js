describe('Routes test', function() {
  beforeEach(module('musicApp'));
  var location, route, rootScope;
  beforeEach(inject(function(_$location_, _$route_, _$rootScope_) {
    location = _$location_;
    route = _$route_;
    rootScope = _$rootScope_;
  }));
  describe('home route', function() {
    beforeEach(inject(function($httpBackend) {
      $httpBackend.expectGET('/html/html/home.html').respond('200', 'home HTML')
    }));
    it('should load the home page', function() {
      location.path('/');
      rootScope.$digest();
      expect(route.current.templateUrl).toEqual('/html/html/home.html');
    });
    it('should load the albums page', function() {
      location.path('/albums');
      rootScope.$digest();
      expect(route.current.templateUrl).toEqual('/html/html/albums.html');
    });
    it('should load the add page', function() {
      location.path('/add');
      rootScope.$digest();
      expect(route.current.templateUrl).toEqual('/html/html/add.html');
    });
    it('should load non-existent page', function() {
      location.path('/some/non/existent/url');
      rootScope.$digest();
      expect(route.current.templateUrl).toEqual('/html/html/404.html');
    });
  });
});