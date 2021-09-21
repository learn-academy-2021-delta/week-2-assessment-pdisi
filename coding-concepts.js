// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
// console.log(cohort.split(""))

// a) Your answer: The split method will take the string and separate the letters 'D', 'e',...
// b) Verify and explain: Split separates what it is called upon and since there is no space between the quotes here ("") then there will be regular spacing in the terminal.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, Learn Student!
// b) Verify and explain: It comes back as undefined because it does not have a return inside of the function.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: Map will multiply all of the numbers inside of the array by 2, so [8, 10, 12...]
// b) Verify and explain: map is used to convert each item inside of an array to something else. For this the value * 2 is multipying each index within the array by 2.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: This should remove the even numbers from the array oddsOnly due to the fact that mod is being used to be strictly equal to 0 when divided by 2.
// b) Verify and explain: This actually removes the odd numbers and gives [12, 14]. I had mod === confused with !==. Tricked me with the oddsOnly...


// --------------------5) What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: This should replace "name" in this.student with "George"
// b) Verify and explain: Learn {student: 'George', cohort: 'Delta', year: 2021}. I was surprised to see Learn in the terminal, but I just need more practice with classes.
