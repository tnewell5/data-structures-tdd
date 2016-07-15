'use strict';
var expect = require('chai').expect;
var Lists = require('./linked-lists.js');

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
