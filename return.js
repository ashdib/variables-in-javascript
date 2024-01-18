function getMilk(money,cost) {   

    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("The robot can buy " + getBottlesMilk(money, cost)  + " bottles of milk");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    console.log("Master here is the " + getMoneyChange(money,cost) + " change.")
  }
  
  
  //bottle = $1.5
  //you give $5 to the robot to buy milk
  getMilk(4, 3);
  
  // create function for total of milk is been buying
  
  function getBottlesMilk(startingMoney, costPerBottle){
  
      var bottlesCanBeBuy = Math.floor(startingMoney / costPerBottle);
      return bottlesCanBeBuy;
  }
  
  // create function for calculate change after buying milk
  function getMoneyChange(startingMoney, costPerBottle){
      var moneyChange = startingMoney % 1.5;
      return moneyChange;
  }
  
  