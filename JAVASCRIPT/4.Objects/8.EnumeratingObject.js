// Enumerating Properties of an Object

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// for...in loop examples
for (let key in circle) {
  console.log(key); //outputs radius & draw
}

for (let key in circle) {
  console.log(key, circle[key]); //outputs radius 1 & draw [Function: draw]
}

// Using for...of loops with objects -> not this will work when working with arrays only
for (let key of Object.keys(circle)) {
  console.log(key); // outputs radius & draw
}

for (let entry of Object.entries(circle)) {
  console.log(entry); // outputs [ 'radius', 1 ] &  [ 'draw', [Function: draw] ]
}
