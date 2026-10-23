// background · fill · stroke · noFill · noStroke
function setup() {
  createCanvas(400, 400)
  noLoop()
}

function draw() {
  background(20)

  noStroke()
  fill(0, 255, 0)
  rect(40, 40, 130, 130)

  noFill()
  stroke(255)
  strokeWeight(2)
  rect(230, 40, 130, 130)

  fill(255, 80, 80)
  stroke(0, 255, 0)
  strokeWeight(2)
  rect(40, 230, 130, 130)

  fill(100, 180, 255, 180)
  stroke(255)
  strokeWeight(10)
  rect(230, 230, 130, 130)
}
