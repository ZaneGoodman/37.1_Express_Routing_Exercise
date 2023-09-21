const ExpressError = require("./expressError");

// Here instead of adding an error handler to stop a user from adding text in the numbers query, I instead parsed the information they gave to ignore all text and only use the numbers,
// The error handler will be executed however if a user inputs 0 numbers.
function convertStringToIntegers(string) {
  try {
    let sortedArray = string.match(/\d+/g);
    let parsedArray = [];
    sortedArray.forEach((val) => {
      let int = parseInt(val);
      parsedArray.push(int);
    });
    return parsedArray;
  } catch (e) {
    throw new ExpressError("Error, Invalid input type", 404);
  }
}

function findMedian(arr) {
  arr.sort();
  const midpoint = Math.floor(arr.length / 2);
  const median =
    arr.length % 2 === 1
      ? arr[midpoint]
      : (arr[midpoint - 1] + arr[midpoint]) / 2;
  return median;
}

function findMean(arr) {
  let total = 0;
  let count = 0;

  arr.forEach((value) => {
    total += value;
    count++;
  });

  let mean = total / count;

  return mean;
}

function findMode(arr) {
  let obj = {};
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  let largestValue = -1;
  let largestValuesKey = -1;

  Object.keys(obj).forEach((key) => {
    let value = obj[key];

    if (value > largestValue) {
      largestValue = value;
      largestValuesKey = key;
    }
  });
  return parseInt(largestValuesKey);
}

module.exports = { convertStringToIntegers, findMedian, findMean, findMode };
