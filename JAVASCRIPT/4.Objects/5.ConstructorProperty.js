// Every object in .js has a property called a constructor. -> references the function that was used to construct or create that object.

//Factory Function Example
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);
console.log(circle.constructor); //Returns -> [Function: Object] -> meaning the object was created in another object.

// Constructor Function Example
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}
const another = new Circle(1);
console.log(another.constructor); //Returns -> [Function: Circle] -> meaing the Circle function created this object because of the 'this.'
