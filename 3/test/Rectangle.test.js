// test/capitalizeFirst.test.js
const assert = require('assert');
const { lstat } = require('fs');
const Rectangle = require('../Rectangle');

// give the test suite a label using describe
describe('Rectangle', () => {
  // give the test a label using it
  it('is a function accepting two argument', () => {
    assert.strictEqual(typeof Rectangle, 'function');
    assert.strictEqual(Rectangle.length, 2);
  });

  it('detect if is a real Square', () => {
    assert.strictEqual(Rectangle.length == 2, true);
    assert.strictEqual(Rectangle.length != 2, false);
  });
  /*
    it('calcule Area correctly', () => {
      assert.strictEqual(Rectangle.getArea(13, 7), 91);
    });
    */
  it('calcule Perimeter correctly', () => {
    assert.strictEqual(Rectangle.getPerimeter(13, 7), 40);
  });
});
