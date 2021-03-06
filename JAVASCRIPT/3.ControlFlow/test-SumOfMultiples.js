// multiples of 3 and multiples of 5 up to limit defined -> added together.
/* E.g. limit = 10
multiples of 3: 3, 6, 9
multiples of 5: 5, 10
above multpes total to 33
*/

console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}
