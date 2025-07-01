let socket = io();
let myColor;
let blackColor;
let eraseColor;
let penSize = 5;

// store drawings
let newCanvas = [];
let drawings = [];

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  background(230, 230, 230);

  // ------- BUTTON FUNCTIONS --------

  let clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", clearCanvas);

  let eraseButton = document.getElementById("eraseButton");
  eraseButton.addEventListener("click", eraseFunction);

  let blackPen = document.getElementById("blackPen");
  blackPen.addEventListener("click", blackFunction);

  let redPen = document.getElementById("redPen");
  redPen.addEventListener("click", redFunction);

  let orangePen = document.getElementById("orangePen");
  orangePen.addEventListener("click", orangeFunction);

  let greenPen = document.getElementById("greenPen");
  greenPen.addEventListener("click", greenFunction);

  let bluePen = document.getElementById("bluePen");
  bluePen.addEventListener("click", blueFunction);

  let purplePen = document.getElementById("purplePen");
  purplePen.addEventListener("click", purpleFunction);

  let pinkPen = document.getElementById("pinkPen");
  pinkPen.addEventListener("click", pinkFunction);

  let randomPen = document.getElementById("randomPen");
  randomPen.addEventListener("click", randomColorFunction);

  let penPlus = document.getElementById("penPlus");
  penPlus.addEventListener("click", penPlusButton);

  //   let penMinus = document.getElementById("penMinus");
  //   penMinus.addEventListener("click", function () {
  //     penSize = penSize - 5;
  //   });

  let penMinus = document.getElementById("penMinus");
  penMinus.addEventListener("click", penMinusButton);

  blackPen.addEventListener("click", function () {
    console.log("clicked!");
  });

  myColor = {
    r: random(255),
    g: random(255),
    b: random(255),
  };

  //   blackColor = {
  //     r: 180,
  //     g: 180,
  //     b: 230,
  //   };

  //   eraseColor = {
  //     r: 230,
  //     g: 230,
  //     b: 230
  //   };

  socket.on("draw", onDraw);
  // socket.on("draw", changePen);
  // socket.on("clear", clearCanvas);
}

function draw() {
  // for (let i = 0; i < drawings.length; i++) {
  //   let data = drawings[i];
  //   stroke(data.color.r, data.color.g, data.color.b);
  //   strokeWeight(10);
  //   line(data.px, data.py, data.x, data.y);
  // }

  strokeWeight(25);
  stroke(230, 230, 230);
  textFont("Questrial");

  textSize(20);
  penLabel = text("Pen Size: " + penSize, 10, 20);
}

// will maybe add extra info to data

function mouseDragged() {
  let data = {
    x: mouseX,
    y: mouseY,
    px: pmouseX,
    py: pmouseY,
    color: myColor,
    penSize: penSize
    // black: blackColor,
    // erase: eraseColor
  };

  socket.emit("draw", data);
}

function onDraw(data) {
  drawings.push(data);
  stroke(data.color.r, data.color.g, data.color.b);
  strokeWeight(data.penSize);
  line(data.px, data.py, data.x, data.y, 50, 50);
}

// Resize the canvas when the
// browser's size changes.
function windowResized() {
  resizeCanvas(windowWidth - 100, windowHeight - 100);
  background(230, 230, 230);
}

// OLD CHANGE PEN ATTEMPT
// function changePen(data) {
//   stroke(0);
//   // line(data.px, data.py, data.x, data.y, 50, 50);
//   console.log("changepen");
// }

// ------ BUTTON FUNCTIONS ------

function clearCanvas() {
  newCanvas.push();
  background(230, 230, 230);
  // socket.emit("clear");
 
}

function penPlusButton() {
  penSize = penSize + 5;
}

function penMinusButton() {
  penSize = penSize - 5;
}

function eraseFunction() {
  myColor = {
    r: 230,
    g: 230,
    b: 230,
  };
}

function blackFunction() {
  myColor = {
    r: 0,
    g: 0,
    b: 0,
  };
}

function redFunction() {
  myColor = {
    r: 204,
    g: 44,
    b: 33,
  };
}

function orangeFunction() {
  myColor = {
    r: 242,
    g: 155,
    b: 41,
  };
}

function greenFunction() {
  myColor = {
    r: 29,
    g: 153,
    b: 50,
  };
}

function blueFunction() {
  myColor = {
    r: 58,
    g: 128,
    b: 232,
  };
}
function purpleFunction() {
  myColor = {
    r: 188,
    g: 108,
    b: 235,
  };
}
function pinkFunction() {
  myColor = {
    r: 237,
    g: 154,
    b: 196,
  };
}
function randomColorFunction() {
  myColor = {
    r: random(255),
    g: random(255),
    b: random(255),
  };
}
