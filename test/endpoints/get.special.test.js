/* global describe, it */
/* exported helper */
var request = require('request');
var helper = require('../helper');

var endpoint = '/' + helper.config.get('privatePath');
var method = 'GET';
var baseUrl = 'http://' + helper.config.get('host') + ':' + helper.config.get('port');

describe(method + ' ' + endpoint, function() {
  it('should succeed to return the admin page', function(done) {
    var options = {
      method: method,
      baseUrl: baseUrl,
      url: endpoint,
      json: true
    };
    var statusCode = 200;

    request(options, function(err, response) {
      if (err) {
        done(err);
      }
      else {
        response.statusCode.should.equal(statusCode);
        done();
      }
    });
  });
});