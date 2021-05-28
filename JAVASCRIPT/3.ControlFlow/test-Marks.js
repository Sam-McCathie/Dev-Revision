//calculate the average grade of the array

// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const marks = [60, 70, 30, 80, 90, 70, 80, 100];

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
