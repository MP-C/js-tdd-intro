// capitalizeFirst.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeEveryFirstLetter(input) {
  return input.length > 0 ? (input[0].toUpperCase() + input.slice(1)) : input[0] === ('') + input[1].toUpperCase() + input.slice(2) ? ('error') : ('');
}


// Check that capitalizeEveryFirstLetter is a function
assert.strictEqual(typeof capitalizeEveryFirstLetter, 'function');
// Check that capitalizeEveryFirstLetter accepts one argument
assert.strictEqual(capitalizeEveryFirstLetter.length, 1);
// Check that capitalizeEveryFirstLetter transforms javaScript correctly
assert.strictEqual(capitalizeEveryFirstLetter('i am learning TDD'), 'I Am Learning TDD');
// Check that it works for a 1-character string
assert.strictEqual(capitalizeEveryFirstLetter('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeEveryFirstLetter(''), '');
