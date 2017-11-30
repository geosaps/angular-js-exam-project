describe('HTTP service test', function() {
  beforeEach(module('musicApp'));
  var httpService = null;
  var data = null;
  var mockObject = {
    "0": {
      "title": "Empire Burlesque",
      "artist": "Bob Dylan",
      "country": "USA",
      "company": "Columbia",
      "price": 10.9,
      "year": 1985,
      "id": 0
    },
    "1": {
      "title": "Hide your heart",
      "artist": "Bonnie Tyler",
      "country": "UK",
      "company": "CBS Records",
      "price": 9.9,
      "year": 1988,
      "id": 1
    },
    "2": {
      "title": "Greatest Hits",
      "artist": "Dolly Parton",
      "country": "USA",
      "company": "RCA",
      "price": 9.9,
      "year": 1982,
      "id": 2
    }
  };
  beforeEach(inject(function (_httpService_, _$httpBackend_) {
    httpService = _httpService_;
    $httpBackend = _$httpBackend_;
  }));
  afterEach(function() {
    $httpBackend.verifyNoOutstandingRequest();
    $httpBackend.verifyNoOutstandingExpectation();
  });
  it('is service available', function() {
    expect(httpService).toBeDefined();
  });
  it('testing getting all', function () {
    expect(httpService.loadAllAlbums).toBeDefined();
    $httpBackend.whenGET('/albums/all').respond(200, mockObject);
    httpService.loadAllAlbums().then(function (response) {
        data = response;
    });
    $httpBackend.flush();
    expect(data).toBeDefined();
  });
  it('testing album count', function () {
    expect(httpService.countAlbums).toBeDefined();
    $httpBackend.whenGET('/albums/count').respond(200, {
        "value": Object.keys(mockObject).length
    });
    httpService.countAlbums().then(function (response) {
        data = response;
    })
    $httpBackend.flush();
    expect(data).toBeDefined();
  });
  it('delete album test', function () {
    expect(httpService.deleteAlbum).toBeDefined();
    $httpBackend.whenDELETE('/albums/delete/0').respond(200, delete mockObject['0']);
    httpService.deleteAlbum(0);
    $httpBackend.flush();
  });
  it('add new album test', function () {
    expect(httpService.addNewAlbum).toBeDefined();
    var newAlbum = {
      id: 3,
      title: "Reload",
      artist: "Metallica",
      country: "USA",
      company: "Sony Records",
      price: '10.9',
      year: '1997',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/ru/b/b0/Metallica_Reload.jpg'
    };
    $httpBackend.whenPOST('/albums/add').respond(201);
    httpService.addNewAlbum(newAlbum);
    $httpBackend.flush();
  });
  it('edit album test', function () {
    expect(httpService.editAlbum).toBeDefined();
    var newAlbum = {
      id: 3,
      title: "Load",
      artist: "Metallica",
      country: "USA",
      company: "Sony Records",
      price: '11.9',
      year: '1996',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Metallica_-_Load_cover.jpg/220px-Metallica_-_Load_cover.jpg'
    };
    $httpBackend.whenPOST('/albums/update/3').respond(200);
    httpService.editAlbum(newAlbum, 3);
    $httpBackend.flush();
  });
});