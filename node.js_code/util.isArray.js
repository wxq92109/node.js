var util = require('util');

console.log("util.isArray([]): "+util.isArray([]))
  // true
console.log("util.isArray(new Array): "+util.isArray(new Array))
  // true
console.log("util.isArray({}): "+util.isArray({}));

  // false