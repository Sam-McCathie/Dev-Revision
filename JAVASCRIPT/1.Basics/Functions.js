// Functions - Something that performs a set of tasks or calculates a value.

// add variables between (name) -> this is called a parameter. -> this variable is only meaningful inside of the function and not accessable outside the function.
function greet(name) {
  console.log("Hello " + name);
}
// between the {} is the body of the function to provide logic to the application.

greet("Sam"); // This calls the function. -> the part between the ( ) is an argument.
// pass the value / parameter of name between the () of the call part of the function.

greet("Acacia"); // the function can be reused

/* ----- New function below ----- */

// multiple parameters can be passed
function fullName(fName, lName) {
  console.log("Ello " + fName + " " + lName);
}

//multiple agruments can be passed.
fullName("Sam", "McCathie");
