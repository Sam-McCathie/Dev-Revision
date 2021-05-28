//Show numbers from 0 to input number and if they are odd or even.

showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      console.log(i + ' "Even"');
    } else console.log(i + ' "Odd"');
  }
}

//Alternate solution
showNumbers2(10);

function showNumbers2(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = i % 2 === 0 ? "Even" : "Odd";
    console.log(i, message);
  }
}
