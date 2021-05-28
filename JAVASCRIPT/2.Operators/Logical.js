// Logical operators -> make decisions based on multiple conditions.

//Logical AND (&&)
//Returns TRUE if both operands are TRUE.
console.log(true && true); // = true
console.log(false && true); // = false

// Real world example.
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log("Client is eligible for loan? = " + eligibleForLoan);

//Logical or (||)
// Returns TRUE if one (or both) of the operand is TRUE.
console.log(true || true); // = true
console.log(false || true); // = true

// Real world example.

let niceSmile = true;
let isAGamer = false;
let girlfriendTraits = niceSmile || isAGamer;
console.log("Girlfriend potential? = " + girlfriendTraits);

// Not operator (!) - returns the opposite of the input result. if starts with true will return false, if starts with false will return true.
let redFlag = !girlfriendTraits;
console.log("Red flag? = " + redFlag);
