function drawLines() {
  count = 0
  while (count < 10) {
    line(random(width), random(height), random(width), random(height))
    count ++
  }
}
drawLines();
