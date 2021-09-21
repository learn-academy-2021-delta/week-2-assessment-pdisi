// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

//Test Setup Practice
// describe("divisible", () => {
//   test("returns if the variable is evenly divisible by three", () => {
//     expect(divisible()).toEqual("yes")
//   })
// })

Test to be executed with function
describe("divisible", () => {
  test("returns if the input variables are evenly divisible by three or not", () => {
    expect(divisible(15)).toEqual("15 is divisible by three")
    expect(divisible(0)).toEqual("0 is divisible by three")
      expect(divisible(-7)).toEqual("-7 is not divisible by three")
  })
})
//
// //Test results in FAIL (RED), which is expected, "divisible is not defined".
//
// var num1 = 15
// // Expected output: "15 is divisible by three"
// var num2 = 0
// // Expected output: "0 is divisible by three"
// var num3 = -7
// Expected output: "-7 is not divisible by three"
//
// // b) Create the function that makes the test pass.
//
// //The function name and return must match exactly what I created for my expect and matcher methods
// //I will create a function just to test for a pass. I am doing this for practice and comprehension.
//
// // const divisible = () => {
// //   return "yes"
// // }

// //Test passes
// //I must create multiple expect outcomes for the possible variables that are given in this divisible function.
// //Create a function named divisible that takes in a variable
// //Create a conditional statement that uses mod to determine if given variable is evenly divisible by 3
// //Create returns for each condition


// //Notes on process: I have spent way too much time on this challenge due to simple syntax errors and difficulty with Jest, but I believe my
// logic finally executed correctly with Jest. I learned a ton through Sarah and Rebecca along this process!

const divisible = (number) => {
  if(number % 3 === 0){
    return `${number} is divisible by three`
  } else{
    return `${number} is not divisible by three`
  }
}

//Test Pass


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//I will need two expect statements that include the given variables and what they're going to equal

describe("capitalizer", () => {
  test("returns an array with all the words capitalized", () => {
    expect(capitalizer("streetlamp", "potato", "teeth", "conclusion", "nephew")).toEqual("Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew")
    expect(capitalizer("temperature", "database", "chopsticks", "mango", "deduction")).toEqual("Temperature", "Database", "Chopsticks", "Mango", "Deduction")
  })
})
//
// //Test FAIL due to capitalizer is not defined
//
// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // // // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // // // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
// //
// // // // b) Create the function that makes the test pass.

const capitalizer = (array) => {
  let eachItem = array.map(value => {
    return value[0].toUpperCase() + value.substring(1)
  })
    return eachItem.join(" ")
  }


//Create a function called capitalizer which will take in an array
//Use the map function to change the value of each index at the position of 0
//use toUpperCase to change the first letter of each word to a capital letter
//return and join the strings back together in an array

//Notes on process: I believe that the logic behind my function is correct, however, Jest keeps giving me an error that states "array.map is not a function".
// I did research online and read through the syllabus on higher-order-functions to come up with the function that I attempted to use.
//
// console.log(capitalizer.randomNouns1);


// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
  test("logs the index of the first vowel within a given string", () => {
    expect(firstVowel("learn")).toEqual(1)
    expect(firstVowel("academy")).toEqual(0)
    expect(firstVowel("challenges")).toEqual(2)
  })
})

//test FAIL due to firstVowel is not defined


// var vowelTester1 = "learn"
// // Expected output: 1
// var vowelTester2 = "academy"
// // Expected output: 0
// var vowelTester3 = "challenges"
// // Expected output: 2



// b) Create the function that makes the test pass.

//Creating a class called firstVowel just like in the Test
//Create a generic "string" that firstVowel goes into
//establish what is being searched for within the string (vowels)
//return what index has a vowel in string (lost here. tired)

const firstVowel = (string) => {
  let string = str.search(/[a,e,i,o,u,A,E,I,O,U]/gi)
  return indexOf(string)
}
//Notes on process: I established the jest test that I need in order to setup my function. I attempted to setup my function in
//a similar way to challenge #1 where i did "const divisible = (number)", however, this time the test comes back with (string)
//on line 149 as an unexpected token. I am lost with where to go from here. I'm also too tired to think right now.
//My paired programming was extremely unproductive this week compared to week 1, so it feels like I am playing catch up.
