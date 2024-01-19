// Challenge : Test your understanding of array and if/else statement

// create array of names
var guestNames = ["Nabil", "Adib", "Kaseh" , "Wildany"];

// get name from guest
var getGuestName = prompt("Your name in guest lists");

// check if the guest return all lower case
var guestName = getGuestName.slice(0,1).toUpperCase() + getGuestName.slice(1,getGuestName.length);

// check if the guest name exist or not

function checkGuestName(listOfGuest, Name){
if(listOfGuest.includes(Name)){
    return "Welcome to the party, " + Name;
}
else {
    return "Sorry you are not invited " + Name;
  }
}

var result = checkGuestName(guestNames,guestName);
console.log(result);