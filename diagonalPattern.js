/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/

// MY SOLUTION
function main(){
    //your code here
  rightUpBeeper();
 
   rightUpBeeper2();
 
   rightUpBeeper3();
 
  rightUpBeeper4();
 
  turnForRight();
 
  
   goUp();
 
  
 }
 
 
 
 function rightUpBeeper(){
    putBeeper();
    move();
    turnLeft();
    move();
 }
 
 function rightUpBeeper2(){
    putBeeper();
    turnLeft();
    turnLeft();
    turnLeft();
    move();   
 }
 
 function rightUpBeeper3(){
   turnLeft();
   move();
   putBeeper();   
 }
 
 function rightUpBeeper4(){
    turnLeft();
    turnLeft();
    turnLeft();
    move();
    turnLeft();
    move();
    putBeeper();
 }
 
 function turnForRight(){
   //turn right
   turnLeft();
   turnLeft();
   turnLeft();
   move();
 }
 function goUp(){
   //goUp
   turnLeft();
   move();
   putBeeper();
 }

 //INSTRUCTOR SOLUTION