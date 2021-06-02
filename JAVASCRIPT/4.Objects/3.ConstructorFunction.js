//Constructor function -> construct or create an object.
//Use "pascal notation" instead of camel case: OneTwoThree (uppercase the start of each word.)
// Factory functions & Constuctor functions do the same thing.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}
// this = an empty object. it is in reference to the object that is executing this piece of code.
// by adding the .{something} we are adding this to that object

const circle = new Circle(1);
// new = When adding 'new' 3 things happen.
// 1. A new empty JavaScript Object is created (e.g. const x = {};)
// 2. It will set the 'this' above to point to the empty object.
// 3. It will return the object from the function

//note - the code does not return anything?
