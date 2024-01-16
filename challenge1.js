// Challenge : Change the first letter to capital letter and return new statement with first letter is capital letter.

//TODO: Get the user name
var userName = prompt("What is your name");

//TODO: Change the first letter of from the userName to capital
var firstCapitalChar = userName.slice(0,1).toUpperCase();

//TODO: Make sure the rest of character after the first capital is lower capital
var restOfChar = userName.slice(1,userName.length).toLowerCase();

//TODO; Concatenate the userName and greeting the user
alert("Hello welcome to WriteFast, "+firstCapitalChar + restOfChar);