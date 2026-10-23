// setup bir kez · draw bir kez (noLoop)
function setup() {
  createCanvas(400, 400)
  noLoop()
}

function draw() {
  background(20)
  noStroke()
  fill(0, 255, 0)
  circle(width / 2, height / 2, 80)

  fill(255)
  textSize(14)
  text('setup() → bir kez', 16, 28)
  text('draw() → burada durdu (noLoop)', 16, 50)
}
