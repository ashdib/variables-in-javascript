/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main() {
  alternateTile();
  goUpLeft();
  alternateTile();
  goUpRight();
  alternateTile();
  goUpLeft();
  alternateTile();
  goUpRight();
  alternateTile();
}

function skip1Tile() {
  move();
  move();
}

function alternateTile() {
  putBeeper();
  skip1Tile();
  putBeeper();
  skip1Tile();
  putBeeper();
}

function goUpLeft() {
  turnLeft();
  move();
  turnLeft();
}
function goUpRight() {
  turnRight();
  move();
  turnRight();
}
