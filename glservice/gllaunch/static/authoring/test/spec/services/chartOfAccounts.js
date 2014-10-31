'use strict';

describe('Service: chartOfAccounts', function () {

  // load the service's module
  beforeEach(module('authoringApp'));

  // instantiate service
  var chartOfAccounts;
  beforeEach(inject(function (_chartOfAccounts_) {
    chartOfAccounts = _chartOfAccounts_;
  }));

  it('should do something', function () {
    expect(!!chartOfAccounts).toBe(true);
  });

});
