//1. Differentiate arrow functions and regular functions.

//Arrow functions:

// Are defined using the => syntax
// Have a more concise and implicit way of defining the function scope, where this keyword refers to the parent scope and cannot be reassigned.
// Do not have their own arguments object
// Cannot be used as a constructor.

// Regular functions:

// Are defined using the function keyword
// Have an explicit and dynamic function scope, where the this keyword can be reassigned.
// Have their own arguments object.
// Can be used as a constructor.
/================================================================/;
//2. Write a program that takes a number of greater than 5 digits from input field and
// shows sum of all odd numbers. For example, if the input is 196783, the sum would
// be 1 + 9 + 7 + 3 = 20.
function sumOddDigits(num) {
  let sum = 0;
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    let digit = parseInt(num[i]);
    if (digit % 2 !== 0) {
      sum += digit;
    }
  }
  return sum;
}

let result = sumOddDigits(196783);
console.log("Sum of all odd digits: " + result);

/================================================================/;

//3. Given an integer N, the task is to find the sum of interior angles of an N-sided
// polygon.

const sumOfInteriorAngles = (n) => {
  return (n - 2) * 180;
};

console.log("Sum of all interior angles: " + sumOfInteriorAngles(5));

/================================================================/;

//4. Create a age calculator that takes date of birth of user and shows age in years,
// months and days.

function calculateAge(dob) {
  let today = new Date();
  let birthDate = new Date(dob);
  let ageInMilliseconds = today - birthDate;
  let ageInSeconds = ageInMilliseconds / 1000;
  let ageInMinutes = ageInSeconds / 60;
  let ageInHours = ageInMinutes / 60;
  let ageInDays = ageInHours / 24;
  let ageInMonths = ageInDays / 30.44;
  let ageInYears = ageInMonths / 12;

  return {
    years: Math.floor(ageInYears),
    months: Math.floor(ageInMonths % 12),
    days: Math.floor(ageInDays % 30.44),
  };
}

let age = calculateAge("2000-07-01");
console.log("Age in Years: " + age.years);
console.log("Age in Months: " + age.months);
console.log("Age in Days: " + age.days);

/================================================/;
