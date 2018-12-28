// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

var roverPosition = (x, y, currentDirection);
var roverX = x;
var roverY = y;
var currentDirection = direction;
// ======================

// ======================
var grid = [ 
  [null,null,null,null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,null,null,null,],
  [null,null,null,null,null,null,null,null,null,null,],
];



function turnLeft(rover){
  switch (currentDirection) {
    case "N": currentDirection = "facing West was called"
    break;
    case "E": currentDirection = "facing North was called"
    break;
    case "S": currentDirection = "facing East was called"
    break;
    case "W": currentDirection = "facing South was called"
    break;
  }
  console.log("turnLeft was called!" + currentDirection);
}

function turnRight(rover){
  switch (currentDirection) {
    case "N": currentDirection = "facing East was called"
    break;
    case "E": currentDirection = "facing South was called"
    break;
    case "S": currentDirection = "facing West was called"
    break;
    case "W": currentDirection = "facing North was called"
    break;
  }
  console.log("turnRight was called!" + currentDirection);
}

function moveForward(rover, currentDirection){
  switch(currentDirection) {
    case "N": roverY = roverY-1
    break;
    case "E": roverX = roverX+1
    break;
    case "S": roverY = roverY+1
    break;
    case "W": roverX = roverX-1
    break;
  }    
   
  console.log("moveForward was called");
}

function commands(rover) {
  for (var i = 0; i <command.length; i++){
  if (command == f){
    moveForward(rover)
  } else if (command == r) {
    turnRight(rover);
  } else if (command == l) {
    turnLeft(rover);
  } else {
     return commands(rover,command)
  }
  }
}