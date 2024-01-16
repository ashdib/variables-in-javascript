// Challenge : Change the first letter to capital letter and return new statement with first letter is capital letter.

var userName = prompt("What is your name");

var firstCapitalChar = userName.slice(0,1).toUpperCase();

alert(firstCapitalChar + userName.slice(1,userName.length));