// For...in -> used to display properties of an object.
// can be used for an array nut a for...of loop is better for that.

const person = {
  name: "Sam",
  age: 25,
};

for (let key in person) {
  console.log(key, person[key]);
}

// - key will hold one of the properties in the person object.
// - key on its own will display the name of the variable e.g. name or age.
// - to define the value of the property inside the variable  -> use bracket notation as the target property is not known until runtime.
//      dot notation will just return undefined.
