# array-intersectional-complement-linear

Sometimes you have two arrays. Sometimes you want to grab the items in those arrays
that are not shared. Sometimes you want this in linear time.

NOTE: Linear time claim is implementation dependent.

Requires node 4 or above due to use of es6


## How to use

```
const aic = require('array-intersectional-complement-linear');

const a = [1, 2, 3, 4, 5];
const b = [2, 3, 4, 5, 6];

aic(a, b);
// -> [1, 6]
```

## Changelog

v1.0.0 - First stab at this