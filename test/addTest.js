'use strict';
/*jshint mocha:true */
var add = require('../public/app');
var assert = require('assert');

describe('add numbers', function() {
  it('should be ten when adding 5 to 5', function() {
    assert.equal(add(5,5), 10);
  });
});
