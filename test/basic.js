const tap = require('tap');
const aic = require('../index');

// Test null objects

var a, b, s;

try {
  aic(a, b);
} catch (e){
  tap.pass("Arrays must be passed");
}

// Test matching arrays

a = [1, 2, 3];
b = [1, 2, 3];

tap.equal(aic(a,b).length, 0);

// Test completely different arrays

a = [1, 2, 3];
b = [4, 5, 6];

tap.equal(aic(a,b).length, 6);
s = new Set(aic(a,b));
tap.assert( s.has(1) &&
            s.has(2) &&
            s.has(3) &&
            s.has(4) &&
            s.has(5) &&
            s.has(6));

// Test overlapping arrays

a = [1,2,3,4,5];
b = [2,3,4,5,6];

tap.equal(aic(a,b).length, 2);
s = new Set(aic(a,b));
tap.assert( s.has(1) &&
            s.has(6));
