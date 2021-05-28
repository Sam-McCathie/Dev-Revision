// Comparrison Operators -> true or false (boolean)
let x = 1;

// relational operators
console.log(x > 0); // greater than
console.log(x >= 0); // greater than or =

console.log(x < 0); // lesser than
console.log(x <= 0); // lesser than or =

// equality operators
// strict equality operator (must be the same type & value - e.g. both are -> a string or number etc)
console.log("-- strict --");

console.log(x === 1); // true - equal to in every way.
console.log("1" === 1); // false

console.log(x !== 1); // false - not equal to in every way.
console.log("1" !== 1); // true

// lose equality operator (doesn't care about the types -> it will convert what is on the right side to what is on the left side)
console.log("-- lose --");
console.log(x == 1); // true - equal to value.
console.log("1" == 1); // true

console.log(x != 1); // false - not equal to in value.
console.log("1" != 1); // false
