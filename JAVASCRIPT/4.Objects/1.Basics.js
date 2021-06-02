// objects are collections of key value pairs. -> if there are properties that are highly related -> encapsulate them in an object.

// let radius = 1;
// let x = 1;
// let y = 1;
// let isVisible = true;
// function draw() {}

//The above could be grouped in a single object as seen below. -> this is object-orientated programming. (OOP)
// OOP = a collection of objections that perform together to offer some functionality.
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

//call the function
circle.draw(); //if a function is part of an object -> this is called a METHOD.
