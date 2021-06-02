// Functions Are Objects -> when the Circle function was created it was created by Function(). Function() is a built in constructor that creates functions.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

Circle.call({}, 1); // this is the same as the another expresssion (below). {} represents the 'this.'
const another = new Circle(1); // the 'new' creates the {} (empty object) -> and then pass as the first argument of the call method.

// if 'new' is not used -> the 'this' above will point to the clobal operator which is 'window'.
/*  so the below would then be the same.
Circle.call(window, 1);
const another = Circle(1);
*/
// Yes confusing.

//alternative to call use apply -> allows you to pass all the arguments in an array. e.g. below.
Circle.apply({}, [1, 2, 3]);
