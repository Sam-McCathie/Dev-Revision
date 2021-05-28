//Fizz buzz
// if number is divisible by 3 = Fizz
// if number is divisible by 5 = Buzz
// if number is divisible by both 3 and 5 = FizzBuzz
// Not divisible by 3 or 5 = input
// Not a number = 'Not a number'
function fizzBuzz(input) {
  if (typeof input !== "number") {
    return NaN;
  } else if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else return input;
}
console.log(fizzBuzz("11"));
//REMEMBER -> use return instead of repeating console.log inside the function.
