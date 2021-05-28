// display all properties of an object that are of type string.

const person = {
  fName: "Sam",
  sName: "McCathie",
  age: 25,
  born: 1995,
  partner: "Acacia",
};

showProperties(person);

function showProperties(person) {
  for (let key in person) {
    if (typeof person[key] === "string") {
      console.log(key, person[key]);
    }
  }
}
