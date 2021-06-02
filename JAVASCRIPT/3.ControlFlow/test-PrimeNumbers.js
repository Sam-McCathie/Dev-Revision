// Show prime numbers up until a limit.
// - Prime = number that can only be divided by itself and 1.

showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number < limit; number++) {
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break; //isPrime = to false -> break loop
      }
    }
    if (isPrime) console.log(number); //if isPrime = to true -> log number
  }
}

/* Result
2
3
5
7
11
13
17
19
*/

// Alternative code.
// showPrimes2(20);

function showPrimes2(limit) {
  for (let number = 2; number < limit; number++)
    if (isPrime(number)) console.log(number); //will log the number passed by is number function.
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false; //returns if factor is found

  return true; //returns if factor is not found
}
