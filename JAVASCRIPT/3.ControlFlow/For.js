// For Loops -> repeating an action a number of times.

/* Example
for (initialExpression; condition; incrementExpression) // <- = for (let i = 0; i < 5; i++) {
    statement
    statement2 //if aplicable
}


notes - initialExpression is where you declare and initialise a variable.
- 'i' is short for index and is common to use in for loops. (known as the loop variable)
- condition -> the loop will run as long as the condition evaluates to true.
- increment could also be i--
*/

for (let i = 0; i < 10; i++) {
  console.log("Run " + (i + 1));
}
// + 1 is used because the value starts at 0.

//using if else in a for loop
for (let i = 10; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i + " is odd");
  else console.log(i + " is even");
}
