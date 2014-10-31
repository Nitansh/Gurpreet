'use strict';

describe('Service: problemMetadata', function () {

  // load the service's module
  beforeEach(module('authoringApp'));

  // instantiate service
  var problemMetadata;
  beforeEach(inject(function (_problemMetadata_) {
    problemMetadata = _problemMetadata_;
  }));

  it('should do something', function () {
    expect(!!problemMetadata).toBe(true);
  });

});
