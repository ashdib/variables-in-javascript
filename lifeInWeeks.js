function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        //Write your code here.
        
      // get total age left based on life to 90 years
      var getAgeLeft = 90 - age;
      // get total days left
      var getDaysLeft = getAgeLeft * 365;
      // get total weeks left
      var getWeeksLeft = getAgeLeft * 52;
      // get total months left
      var getMonthsLeft = getAgeLeft * 12;
      
      console.log("You have " + getDaysLeft + " days, " + getWeeksLeft + " weeks, and " + getMonthsLeft + " months left.");
      
    /*************Don't change the code below**********/
    } 
    
    
    
    lifeInWeeks(51)
    