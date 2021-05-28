// Logical operators with non booleans.
// results is not necessarily a true or false.

//Falsy (false)
// - undefined
// - null
// - 0
// - false
// - '' <- empty string
// - NaN <- not a number

// Anything that is not Falsy -> Truthy

console.log(false || true); // = true
console.log(false || "Sam"); // = Sam
console.log(false || 1); // = 1
console.log(false || 1 || 2); // = 1 -> the evaluation will stop as soon as it lands on Truthy. Known as short-circuiting

// Example
let userColour = "red";
let defaultColour = "pink";
let selectedColour = userColour || defaultColour;
console.log(selectedColour);
// if a user colour has been selected it will return that colour,
//if not (undefined) it will return the default colour.
