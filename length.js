// learn built-in function of length
// length - can be used to find the number of characters of string

// below is the exercise

/* Description : The program has the input fill to put text and shows the written characters 
and remaining of the characters left not exceeding 140 characters*/

// create a prompt for input of string
var inputText = prompt("Compose text here");

//get length of the text
var getLengthText = inputText.length;

// limit 140 characters
var limitcharacters = 140;

// statement
// You have written 182 characters and -42 is remaining

alert(
  "You have written" +
    " " +
    getLengthText +
    " characters" +
    " " +
    "and " +
    (limitcharacters - getLengthText) +
    " is remaining"
);
