// Rover Object Goes Here
var rover = {
  direction: ("N", "E", "S", "w"),
  x: 0,
  y: 0,
  travelLog: []
};


// ======================

// ======================
var grid = [ 
  [rover,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null]
  
];

function turnLeft(rover){
  switch (rover.direction) {
    case "N": 
    console.log("facing W")
    break;
    case "E": 
    console.log("facing N")
    break;
    case "S": 
    console.log("facing E")
    break;
    case "W": 
    console.log("facing S")
    break;
  }
  console.log("Turn left was called. Rover is now facing: [' + rover.x + ',' + rover.y']");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N": 
    console.log("facing E")
    break;
    case "E":
    console.log("facing S")
    break;
    case "S": 
    console.log("facing W")
    break;
    case "W": 
    console.log("facing N")
    break;
  }
  console.log("Turn right was called. Rover is now facing: [' + rover.x + ',' + rover.y']");
}

function moveForward(rover, grid){
  switch(rover.direction) {
    case "N": rover.y--;
    break;
    case "E": rover.x++;
    break;
    case "S": rover.y++;
    break;
    case "W": rover.x--;
    break;
  }    
  console.log("Move forward was called. Rover is now facing: [' + rover.x + ',' + rover.y']");
}

function moveBackword(rover, grid){
  console.log("moveBackword was called!");
  switch(rover.direction) {
    case "N": rover.y++;
    break;
    case "E": rover.x--;
    break;
    case "S": rover.y--;
    break;
    case "W": rover.x++;
    break;
  }    
  console.log("Move backword was called. Rover is now facing: [' + rover.x + ',' + rover.y']");
}

function commandList(rover, command) {
  for (var i = 0; i < command.length; i++){
    var command = command[i];
    switch(command){
      case "f": moveForward(rover);
      break;
      case "r": turnRight(rover);
      break;
      case "l": turnLeft(rover);
      break;
      case "b": moveBackword(rover);
      break;
    }
  }
  console.log("Position: Rover is now facing: [' + rover.x + ',' + rover.y']");
}
