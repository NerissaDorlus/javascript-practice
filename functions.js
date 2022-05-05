//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(a, b) {
  if (a + b < 100) {
    return true;
  } else {
    return false;
  }
}

//Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
  return arr[0];
}

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(addSum(4));

//Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(triArea(10, 4));

//Write a function that takes an integer minutes and converts it to seconds.

function minToSeconds(min) {
  const seconds = min * 60;
  return seconds;
}
console.log(minToSeconds(5));

//Create a function that takes the age in years and returns the age in days.

function ageInDays(years) {
  let days = years * 365;
  return days;
}

console.log(ageInDays(32));
