//Factory function -> produce objects
// use camelCase
// Factory functions & Constuctor functions do the same thing.

function createCircle(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw");
    },
  };
}

//radius: radius can be shortened to just radius.
/* function shortened
draw: function () {
    console.log("draw");
    }
can be shortened to
draw () {
    console.log("draw");
    }
*/

// above simplified =
function createCircleShort(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircleShort(1);
console.log(circle1); //returns the object
console.log(circle1.draw); //returns draw.

const circle2 = createCircleShort(2);
console.log(circle2);
