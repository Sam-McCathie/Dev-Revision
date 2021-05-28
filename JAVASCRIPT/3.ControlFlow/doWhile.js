// do-while loops -> similar to while loops.
// THE difference - while do-while loops conditions are evaluated at the end. -> therefore allowing it to run once even if the condition is false.
// Not a common loop.

let i = 1;

do {
  if (i % 2 === 0) console.log(i + " is even");
  i++;
} while (i <= 5);
