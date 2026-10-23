// Koordinat sistemi: (0,0) sol üst
function setup() {
  createCanvas(400, 400)
  noLoop()
}

function draw() {
  background(20)
  stroke(0, 255, 0)
  strokeWeight(2)
  line(0, 0, width, 0)
  line(0, 0, 0, height)

  strokeWeight(10)
  point(0, 0)
  point(width / 2, height / 2)
  point(width - 20, height - 20)

  noStroke()
  fill(255)
  textSize(13)
  text('(0, 0)', 12, 20)
  text('(width/2, height/2)', width / 2 + 10, height / 2 - 10)
  text('(width, height)', width - 110, height - 12)
}
