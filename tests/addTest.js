'use strict';
/*jshint -W030, mocha:true */
var chai = require('chai');
var expect = chai.expect;
chai.should();
var add = require('../public/app');

describe('add numbers', function() {
  it('should be ten when adding 5 to 5', function() {
    var sum = add(5, 5);
    sum.should.equal(10);
  });
});
