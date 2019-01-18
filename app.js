// Rover Object Goes Here
var rover = {
  direction: ("N"),
  x: 0,
  y: 0,
  travelLog: []
};

var rover2 = {
  direction: ("N"),
  x: 2,
  y: 2,
  travelLog: []
};

var rover3 = {
  direction: ("N"),
  x: 9,
  y: 9,
  travelLog: []
};

// ======================

// ======================
var grid = [ 
  ['rover',null,null,null,null,null,null,null,null,null],
  [null,null,'rover2',null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,'rover3']
];

function turnLeft(rover){
  switch (rover.direction) {
    case "N": 
    rover.direction = "W";
    break;
    case "E": 
    rover.direction = "N";
    break;
    case "S": 
    rover.direction = "E";
    break;
    case "W": 
    rover.direction = "S";
    break;
  }
  console.log("Turn left was called. Rover is now facing:"  + rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case "N": 
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S": 
    rover.direction = "W";
    break;
    case "W": 
    rover.direction = "N";
    break;
  }
  console.log("Turn right was called. Rover is now facing: " + rover.direction);
}

function moveForward(rover){
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
  console.log("Move forward was called. Position is now: " + rover.x + ',' + rover.y);
}

function moveBackwards(rover){
  console.log("moveBackwards was called!");
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
  console.log("Move backwards was called. Position is now: " + rover.x + ',' + rover.y);
}

function commandList(rover, command) {
  for (var i = 0; i < command.length; i++){
    var commands = command[i];
    switch(commands){
      case "f": moveForward(rover);
      rover.travelLog.push(rover.x, rover.y);
      break;
      case "r": turnRight(rover);
      rover.travelLog.push(rover.x, rover.y);
      break;
      case "l": turnLeft(rover);
      rover.travelLog.push(rover.x, rover.y);
      break;
      case "b": moveBackwards(rover);
      rover.travelLog.push(rover.x, rover.y);
      break;
    }
  }
  console.log("Current position: " + rover.x + ',' + rover.y); 
}
