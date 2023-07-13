//Print even numbers to a given parameter

function printEvenNumbers(num) {
  let arr = [];
  for (var i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}

// printEvenNumbers(10);

//Fibonacci Sequence to given length
function fibonacciSeq() {
  const number = parseInt(prompt("Enter the number of terms: "));
  let n1 = 0,
    n2 = 1,
    nextterm;
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

//fibonacciSeq();

//Prints average of an array
function averageOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }
  console.log(sum / arr.length);
}

// averageOfArray([1, 2, 3]);

//Prints the max of an array
function maxOfArray(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }
  console.log(max);
}

// maxOfArray([1, 3, 2, 100]);

//Function that returns the number of vowels in a string

function numberOfVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count++;
  }
  return count;
}

// numberOfVowels("hello");

//Function that adds two numbers
function add(num, num2) {
  return num + num2;
}

//Function that multiplies two numbers
function multiply(num, num2) {
  return num * num2;
}

//Function that takes in a city name and returns the postal code
function getPostalCode(city) {
  let postalCode = {
    lisbon: "V5K 0A1",
    boston: "V5K 0A2",
    "cape town": "V5K 0A3",
    tokyo: "V5K 0A4",
    "new york": "V5K 0A5",
    london: "V5K 0A6",
    paris: "V5K 0A7",
    berlin: "V5K 0A8",
    rome: "V5K 0A9",
    madrid: "V5K 0A10",
  };
  return postalCode[city];
}

//function that sorts an array of strings alphabetically
function sortAlphabetically(arr) {
  return arr.sort();
}

//function that given an array of numbers, returns an array with the numbers sorted in descending or ascending order
function sortNumbers(arr, order) {
  if (order === "ascending") {
    return arr.sort((a, b) => a - b);
  } else if (order === "descending") {
    return arr.sort((a, b) => b - a);
  } else {
    return "Please enter a valid order";
  }
}

//console.log(sortNumbers([1, 3, 2, 5, 4], "ascending"));
//console.log(sortNumbers([1, 3, 2, 5, 4], "descending"));

//function that reverses a number
function reverseNumber(num) {
  let x = num;
  array1 = Array.from(String(num), Number);
  array1.reverse();
  const int = Number(array1.join(""));
  return int;
}

//function that capitalises each word in a string
function capitalise(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr.join(" ");
}

//function that returns the occurences of a letter in a string
function occurences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (letter === str[i]) count++;
  }
  return count;
}

//function that given an array of stings, filters that array for a given string by removing the number from the array and then returning the new array
function filterArrayString(arr, str) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== str) newArr.push(arr[i]);
  }
  return newArr;
}

//function that given an array of numbers, filters that array for a given number
function filterArrayNumber(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) newArr.push(arr[i]);
  }
  return newArr;
}

//function that given an array of objects, filter by removing a given id and then returning the new array
function filterArrayId(arr, id) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id !== id) newArr.push(arr[i]);
  }
  return newArr;
}

//function that given an array of objects, find the object with the given id and return the value
function findObject(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return arr[i];
  }
}

//function that prints todays date in the format dd/mm/yyyy
function todaysDate() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  console.log(`${day}/${month}/${year}`);
}

//Given an array of objects, Write a function that checks if an object contains a value that is higher then 10, return a new array with all the objects that pass the test
function checkValueGreaterThan10(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let objectValues = Object.values(arr[i]);
    if (objectValues[0] > 10) newArr.push(arr[i]);
  }
  return newArr;
}

console.log(checkValueGreaterThan10([{ cat: 1 }, { dog: 20 }]));
