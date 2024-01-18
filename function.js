/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/

//TODO: Make the robot to go up at the right corner
// Using 5x5

function main(){
    //your code here
    goToRight();
    goUp();
 }
 
 function goToRight(){
    
    move();
     move();
      move();
       move();
 }
 
 function goUp(){
    turnLeft();
      move();
     move();
      move();
       move();
    }