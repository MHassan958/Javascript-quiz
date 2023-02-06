// 1. Write a JavaScript program that convert Age into days. You can give hard code value of
// the number.

const findDays = (age) => {
  const days = age * 365;
  console.log(`${age} years is equal to ${days} days.`);
};
findDays(1);

//2. Write a java script function program check whether a string is palindrome or not.

const isPalindrome = (str) => {
  let strLength = str.length;
  for (let i = 0; i < strLength / 2; i++) {
    if (str[i] !== str[strLength - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

//3. Write a JavaScript function to format a number up to specified decimal places

const formatNumber = (num, decimals) => {
  return num.toFixed(decimals);
};

console.log(formatNumber(2.56789, 2));
console.log(formatNumber(2.56789, 3));
