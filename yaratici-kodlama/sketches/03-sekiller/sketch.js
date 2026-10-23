// 2B şekiller — cheat sheet
function setup() {
  createCanvas(400, 400)
  noLoop()
}

function draw() {
  background(20)
  stroke(0, 255, 0)
  fill(0, 255, 0, 160)

  strokeWeight(10)
  point(40, 40)

  strokeWeight(3)
  line(80, 30, 180, 90)

  noFill()
  rect(220, 30, 140, 70)

  fill(0, 255, 0, 160)
  ellipse(100, 200, 100, 70)

  circle(280, 200, 70)

  triangle(40, 360, 100, 260, 160, 360)

  noFill()
  beginShape()
  vertex(220, 270)
  vertex(300, 250)
  vertex(360, 340)
  vertex(240, 360)
  endShape(CLOSE)
}
