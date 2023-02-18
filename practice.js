export {
  sum,
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
function sum(a, b) {
  return a + b;
}

const capitalize = (str) => {
  str = str.trim().toLowerCase();
  let first = str.charAt(0).toUpperCase();
  return first + str.substring(1);
};
const reverseString = (str) => {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str.charAt(i);
  }
  return result;
};

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    if (b === 0) {
      throw new Error("The divisive number cannot be zero");
    }
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};
let str = "a";
str.charCodeAt();

// a - z  97 - 122
// 1: 122 97 2: 122 97
// if charCode + shiftKey >= 123 math:
const caesarCipher = (str, shiftKey = 1) => {
  str = str.toLowerCase();
  let encryption = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      let codeNum = str.charCodeAt(i) + shiftKey;
      if (codeNum >= 123) {
        encryption += String.fromCharCode((codeNum % 123) + 97);
      } else if (codeNum >= 97) {
        encryption += String.fromCharCode((codeNum % 97) + 97);
      } else {
        encryption += String.fromCharCode(122 - (96 % codeNum));
      }
    } else {
      encryption += str.charAt(i);
    }
  }
  return encryption;
};

const analyzeArray = (arr) => {
  if (arr.length < 1) return null;
  let average = 0,
    min = 0,
    max = 0,
    sum = 0,
    length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      min = arr[i];
      max = arr[i];
    }
    min = min <= arr[i] ? min : arr[i];
    max = max >= arr[i] ? max : arr[i];
    sum += arr[i];
  }
  average = sum / length;
  return {
    average,
    min,
    max,
    length,
  };
};
