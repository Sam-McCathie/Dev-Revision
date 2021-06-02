// Value vs Reference Types

//In .js there are two categories of types. Value Types (also called primatives) & Reference Types

/* Value Types are copied by their value
- Number
- String
- Boolean
- Symbol
- Undefined
- null
*/

let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log(number); // output = 10 -> this is because the number in the function is out of scope.

/* Reference Types are copied by their reference
- Object
- Function
- Array
*/

let obj = {value: 10};

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj.value); // Output = 11 -> this is because the obj.value inside of the function have the same reference because they are stored in an object.
