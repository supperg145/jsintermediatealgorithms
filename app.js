//1. Addition
//
//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5.
//To solve this task you might want to use the modulus operator.

let addedValues = 0;

for (let i = 200; i <= 2700; i++) {
  if (i % 3 === 0 || (i % 5 === 0 && !(i % 3 === 0 && i % 5 === 0))) {
    addedValues += i;
  }
}

console.log(addedValues);

//2. Shift the Values

//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front.
//When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

const unShifted = [2, 1, 6, 4, -7];
const shifted = [];
for (let i = unShifted.length - 1; i >= 0; i--) {
  shifted.push(unShifted[i]);
}

const shifted2 = unShifted.reverse();
console.log(shifted2 + " With using reverse array method");
console.log(shifted + " With for loop");

//3. FizzBuzz
//
//Create an algorithm that inserts the numbers from 1 to 135 into an array,
//while replacing the values that are divisible by 3 with the word "Fizz",
//the numbers that are divisible by 5 with the word "Buzz",
//and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".

let fizzBuzzArray = [];
//create an empty array and push the numbers to it
//write the if statements

for (let i = 1; i <= 135; i++) {
  fizzBuzzArray.push(i);
  if (fizzBuzzArray[i - 1] % 3 === 0 && fizzBuzzArray[i - 1] % 5 === 0) {
    fizzBuzzArray[i - 1] = "FizzBuzz";
  } else if (fizzBuzzArray[i - 1] % 3 === 0) {
    fizzBuzzArray[i - 1] = "Fizz";
  } else if (fizzBuzzArray[i - 1] % 5 === 0) {
    fizzBuzzArray[i - 1] = "Buzz";
  }
}

console.log(fizzBuzzArray);

//For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.
//
//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series.
//A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

let sum = 0;
let previous = 0;
let current = 1;

//initiate values of fibonacci sequence and the sum
//add the first current value to  the sum
// calculate the next number in the sequence
//assign the new fibonacci numbers

while (current <= 1000000) {
  sum += current;
  let next = previous + current;
  previous = current;
  current = next;
}

console.log(sum);

//5. Remove the Negative
//
//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].
const x = [1, -2, 4, 1, 6, -3];

//iterate throught array
//if negative found count how many and remove

for (let i = 0; i < x.length; i++) {
  let howMany = 0;

  if (x[i] < 0) {
    howMany += i;
    x.splice(i, howMany);
  }
}
console.log(x);

//6. Communist Censorship
//
//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'],
//replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******'].
//Then make your algorithm work for any word of your choice

const strings = ["Man", "I", "Love", "The", "Matrix", "Program"];

//Create a function that takes two arguments
//Create a variable to store the stars based on the length of the input word
//loop through the array if match found replace the word with starts
//print array

const changeWord = (array, word) => {
  let wordWithStars = "";
  for (let i = 0; i < word.length; i++) {
    wordWithStars += "*";
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      array[i] = wordWithStars;
    }
  }
  console.log(array);
};

changeWord(strings, "The");
