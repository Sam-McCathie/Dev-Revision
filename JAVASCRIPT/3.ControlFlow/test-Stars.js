//Outpout the amount of stars starting from row 1 * -> 10 *'s

showStars(10);

function showStars(rows) {
  const row = "*";

  for (let i = 1; i <= rows; i++) {
    console.log(row.repeat(i));
  }
}

/* Result
 *
 **
 ***
 ****
 *****
 ******
 *******
 ********
 *********
 **********
 */

// Alternative

// showStars2(10);
function showStars2(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}
