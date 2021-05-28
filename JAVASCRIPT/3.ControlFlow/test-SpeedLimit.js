//Speed results
// Define speed limit.
// every 5 over speed limit = 1 point.
// use Math.floor(number) to round down a number. (use 7.0 instead of 70)?
// 12 points = suspended.
checkSpeed(70);

function checkSpeed(speed) {
  const speedLimit = 70;
  const speedPoint = 5; //km per point
  const maxPoints = 12;

  if (speed < speedLimit + speedPoint) {
    console.log("Ok.");
  } else if (speed < speedLimit + speedPoint * maxPoints) {
    console.log("Points: " + Math.floor((speed - speedLimit) / speedPoint));
  } else console.log("Suspended m8");
}
