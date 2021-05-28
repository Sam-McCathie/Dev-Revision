// An array is an object. -> a data structure used to represent a list of items.

let start = []; // Array literal / empty array.

let selectedColours = ["red", "blue"];
// to select the first item in the array.
console.log(selectedColours[0]);

selectedColours[2] = "pink"; // add pink to the array in position 3 [2]
console.log(selectedColours);

selectedColours[3] = 5; // numbers can be added also to the same array.
console.log(selectedColours);

console.log(selectedColours.length); // will return the number of items/ elements in the array.
