// test/capitalizeFirst.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

// give the test suite a label using 'describe'
describe('Rectangle', () => {
  // give the test a label using 'it'
  it('is a function accepting two argument', () => {
    // to verify if it is a 'function'
    assert.strictEqual(typeof Rectangle, 'function');
    // to verify if it has 2 arguments
    assert.strictEqual(Rectangle.length, 2);
  });
  /////////////////////////////////////////////////////////

  // if so, then test the function it self-test
  it('detect if is a real Square', () => {
    // to verify if is a square
    const rectangle = new Rectangle(7, 7);
    assert.strictEqual(rectangle.isSquare(), true);
  });
  it('detect if is not a Square', () => {
    // to verify if is a rectangle
    const rectangle = new Rectangle(7, 13);
    assert.strictEqual(rectangle.isSquare(), false);
  });

  it('calcule Area correctly', () => {
    // to calculate the area
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(), 91);
  });

  it('calcule Perimeter correctly', () => {
    // to calculate the permiter
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });
});
