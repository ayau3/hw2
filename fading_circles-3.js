background(255);
colorMode(HSB);
noStroke();

size = 0
while(true) {
  background(0, 0, 255, 0.1);
  fill(random(270,360), 255, 255);
  ellipse(random(width), random(height), 20+ size);
  size++
}
