'use strict';
var expect = require('chai').expect;
var Lists = require('./linked-lists.js');
var Algorithms = require('./algorithms.js');

describe('Lists', function() {
  it('should exist', function() {
    expect(Lists).to.not.be.undefined;
  });
});

describe('#listNode()', function() {
  it('should take in val and create a linked list node with val as value and point to null', function() {
    var expected = { val: 25, next: null };
    var actual = new Lists.listNode(25);
    expect(actual).to.eql(expected);
  });
});

describe('Algorithms', function() {
  it('should exist', function() {
    expect(Algorithms).to.not.be.undefined;
  });
});

describe('#checkMatch()', function() {
  it('should take in empty string and return true', function() {
    var expected = true;
    var actual = Algorithms.checkMatch('');
    expect(actual).to.eql(expected);
  });
  it('should take in matching prens and brackets string and return true', function() {
    var expected = true;
    var actual = Algorithms.checkMatch('[(])');
    expect(actual).to.eql(expected);
  });
  it('should take in non-matching prens and brackets and return false', function() {
    var expected = false;
    var actual = Algorithms.checkMatch('[)](');
    expect(actual).to.eql(expected);
  });
});
