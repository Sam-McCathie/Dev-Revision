//calculate the average grade of the array

// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const marks = [69];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
  let sum = 0;
  let gradesSubmitted = marks.length;

  for (let grade of marks) sum += grade;

  let averageGrade = sum / gradesSubmitted;

  if (averageGrade <= 100 && averageGrade >= 90) {
    return "A";
  } else if (averageGrade <= 89 && averageGrade >= 80) {
    return "B";
  } else if (averageGrade <= 79 && averageGrade >= 70) {
    return "C";
  } else if (averageGrade <= 69 && averageGrade >= 60) {
    return "D";
  } else return "F";
}

//Alternative
const array = marks; // take array from above so results are the same.

console.log(calculateGradeMain(marks));

function calculateGradeMain(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F alt";
  if (average < 70) return "D alt";
  if (average < 80) return "C alt";
  if (average < 90) return "B alt";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
    return sum / array.length;
  }
}
