// Cloning an Object

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

//simplest way to clone
const simple = {...circle}; // '...' = 'spread operator' takes all the properties and methods from the object and inserts the into the curl braces
console.log(simple);

// another way to clone
const another = Object.assign({}, circle); //This will clone circle into a new object called another. {} target object is an empty object
console.log(another);

// add new data into the new object at time of creation
const addObject = Object.assign(
  {
    colour: "pink", //this will add the pink colour into the new object at the time of its creation
  },
  circle
);
console.log(addObject);

//The old way of doing this is ->
const oldWay = {}; //create an empty object called oldWay
for (let key in circle) oldWay[key] = circle[key]; // use a for in loop to transfer data to the new object
console.log(oldWay);
