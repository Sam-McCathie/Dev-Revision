// Dynamic Nature of Objects

// Once you create an object you can always add more properties or methods or remove them.

// note -> even though this variable is a constant, the data within it can be change. BUT -> circle itself cannot be redefined.
const circle = {
  radius: 1,
};
console.log(circle);

circle.colour = "pink"; //this adds pink to the above JSON.
circle.draw = function () {
  console.log("Hello");
};
console.log(circle);

delete circle.colour; // delete an object.
delete circle.draw;

console.log(circle);
