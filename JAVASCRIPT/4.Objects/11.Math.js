// Math is a build in object in .js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

function random() {
  return Math.random();
}
console.log(random()); // this will return a random integer

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandom(1, 10)); // this will return a random number between max and min.

/*NOTE - there are lots of other versions of this*/
