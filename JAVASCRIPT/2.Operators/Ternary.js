//Ternary or conditional operator. start with a condition -> if that condition is true, use the first result -> if false, use second value.

// If customer has more than 100 points,
// they are a gold customer, otherwise,
// they are a 'silver' customer.

let points = 90;
let type = points > 100 ? "gold" : "silver";
// points > 100 ? if true = "gold" : if not true = "silver".

console.log("You are a " + type + " customer.");
