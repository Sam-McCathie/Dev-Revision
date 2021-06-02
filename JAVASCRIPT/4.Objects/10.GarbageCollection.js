// .js has an inbuild garbage collector -> job is to find the variables and constants that are no longer used and the de-allocate the memory that was allocated earlier.

// When a new object is created, memory is automatically assigned to this object.
let circle = {};
console.log(circle);
// when we are done using an object we do not have to de-allocated the memory.
