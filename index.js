const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map((bookTitle) => {
  const arrayOfWords = bookTitle.split(" ")
  const capitalizedFirst = arrayOfWords.map(
    (arrayOfWords) => arrayOfWords.charAt(0).toUpperCase() 
    + arrayOfWords.slice(1)
  )
  const correctedCaps = capitalizedFirst.join(" ");
  return correctedCaps;
})
}

console.log(titleCased(tutorials))
// make function that returns array with title case tutor
//take first element index[0], string into an array?
// index[0]

// map.(str[i])
// .forEach
//.charAt
//var words = string.split(" ")
//will need loop

//save index[0] //turn the string into an array of strings


// const transformIntoArray = firstTitle.split(" ")
// console.log(transformIntoArray)

//uppercase first letter of each index in the array of strings use .forEach
// charAt(0).toUpperCase() + array.slice(1))
// const uppercaseFunction = firstTitle.map(array => array.charAt(0).toUpperCase() + array.push(1))

// console.log(capitalizeFirstLetter(firstTitle))
const firstTitle = tutorials[0].split(" ")

function capitalizeWords(arrayParam) {
  return arrayParam.map((individualWord) => {
    const capitalizedFirst = individualWord.charAt(0).toUpperCase();
    const rest = individualWord.slice(1).toLowerCase();
    return capitalizedFirst + rest;
  });
}
console.log(captitalizeWords(tutorials))
// console.log(firstTitle.join(" "));

// function iterate thru the array and turn each string into an array of strings .split(" ")
function makeArrays(array){
  let emptyArray = [];
  for (let i = 0; i < array.split(" ").length; i++) {
    emptyArray.push(array);
}
return emptyArray;
}

 //function to convert array into a string
function arrayJoin(array) {
  let space = " "
  for (let i = 0; i < array.length; i++) {
    space += array[i];
}
}
// console.log(arrayJoin(firstTitle))

//apply captialize 
