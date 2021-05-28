// Switch...case -> use if...else over this usually

/* Example
switch (variable) {
    caseStatement1 :
        console.log("Output Case 1")
        break;
    caseStatement2 :
        console.log("Output Case 1")
        break;
    
    default :
        console.log("default output.")
    
}

Note - a statement is used to compare the variable with something else.
    - no limitation to statements
    - end each statement with a break -> if one statement passes it will provent others from passing. 
        if it is not added, the default will always run ever if another case already passes.
    - if no cases match -> you can add a default statement.
*/

let role = "teacher";

switch (role) {
  case "guest":
    console.log("Guest user");
    break;

  case "teacher":
    console.log("Teacher user");
    break;

  default:
    console.log("Who the fook is that guy?");
}
