//slice built-in function : to separate the characters in string according to x and y values.
// syntax : string.slice(x,y);

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

// get the text the exceeds the limit of characters

var getTextExceeds = inputText.slice(140, getLengthText);

alert("This is the text that exceeds 140 characters" + " : " + getTextExceeds);

// slice the text for 140 characters only

var getTextUnder40 = inputText.slice(0,140);

alert(getTextUnder40);
