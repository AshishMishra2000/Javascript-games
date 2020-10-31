var X = [];
var Y = [];
N = 201;
var r; //radius
var angle;
var step; //distance between steps in radians
var temp;
var flag = 0;
var num = document.getElementById('Number');

function setup() {
  createCanvas(900, 900);

  //initialize variables
  r = 400;
  angle = 0;
  step = TWO_PI / 360; //in radians equivalent of 360/6 in degrees
  strokeWeight(2);
}

function draw() {
  // background(220);

  //move 0,0 to the center of the screen
  translate(width / 2, height / 2);

  //convert polar coordinates to cartesian coordinates
  var x = r * sin(angle);
  var y = r * cos(angle);

  //draw ellipse at every x,y point
  fill(0);
  ellipse(x, y, 2, 2);
  if (angle < TWO_PI) {
    X.push(x);
    Y.push(y);
  }

  if (angle > TWO_PI) {
    stroke('purple');
    plotline();
    noLoop();
  }
  //increase angle by step size
  angle = angle + step;
}

async function plotline() {
  for (var j = 2; j < N; j++) {
    document.getElementById('Number').innerHTML = j;
    temp = j % 2;
    assignco();
    for (var i = 0; i < 360; i++) {
      var x1 = X[i % 360];
      var y1 = Y[i % 360];
      var x2 = X[(j * i) % 360];
      var y2 = Y[(j * i) % 360];
      line(x1, y1, x2, y2);
      await sleep(10);
    }
    await sleep(1000);
    if (j < N - 1) {
      clear();
    }
    stroke('black');
    fill(0);
    for (var i = 0; i < 360; i++) {
      ellipse(X[i], Y[i], 2, 2);
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function assignco() {
  if (temp == 0) {
    stroke('purple');
  } else if (temp == 1) {
    stroke('red');
  }
  // } else if (temp == 2) {
  //   stroke('#2541b2');
  // } else if (temp == 3) {
  //   stroke('teal');
  // } else if (temp == 4) {
  //   stroke('orange');
  // } else if (temp == 5) {
  //   stroke('turquoise');
  // }
}
