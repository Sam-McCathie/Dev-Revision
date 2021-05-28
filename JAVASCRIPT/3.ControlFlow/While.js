// While loop -> similar to for loops but the variable is declared externally.

/* 
let i = 0;
while(condition){ // -> while(i <= 5)
    statement   //e.g. console.log("something")
    incriment // -> i++;
}
*/

let i = 0;

while (i <= 6) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// note - if the condition is true the statement will be executed.
