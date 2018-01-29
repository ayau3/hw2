//Mondrian with rectangles.
function setup() {
  createCanvas(340, 340);
}

function draw() {
  fill(255, 255, 255);
  rect(0, 0, random(width), random(width));
  fill(0, 0, 0);
  rect(0, 0, random(width), random(width));
  fill(255, 204, 0);
  rect(0, 0, random(width), random(width));
  fill(0, 0, 255);
  rect(0, 0, random(width), random(width));
  fill(255, 0, 0)
  rect(0, 0, random(width), random(width));
}

// My own Mondrian with ellipses instead of rectangles.
/*
function setup() {
  createCanvas(340, 340);
}

function draw() {
  fill(255, 255, 255);
  ellipse(170, 170, random(width), random(width));
  fill(0, 0, 0);
  ellipse(170, 170, random(width), random(width));
  fill(255, 204, 0);
  ellipse(170, 170, random(width), random(width));
  fill(0, 0, 255);
  ellipse(170, 170, random(width), random(width));
  fill(255, 0, 0)
  ellipse(170, 170, random(width), random(width));
}
*/
