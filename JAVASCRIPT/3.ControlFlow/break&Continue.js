// Break and Continue -> can change how the loop behaves. Applise to all loops.

//Standard while loop example.
let i = 0;
while (i <= 10) {
  console.log("standard while " + i);
  i++;
}
// result = 0 -> 10

//While loop with a break
let x = 0;
while (x <= 10) {
  if (x === 5) break;
  console.log("Break while " + x);
  x++;
}
//Result = 0 -> 4

//While loop with continue. -> not common
let y = 0;
while (y <= 10) {
  if (y % 2 === 0) {
    y++;
    continue;
  }

  console.log("Continue while " + y);
  y++;
}
// result = 1, 3, 5, 7, 9
// continue will make complete the run of code and start over preventing any code below from running / jump to the next iteration
