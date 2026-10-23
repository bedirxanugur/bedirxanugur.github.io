// random() — tek kare, sabit görüntü
function setup() {
  createCanvas(400, 400)
  randomSeed(42)
  noLoop()
}

function draw() {
  background(20)
  stroke(0, 255, 0)
  strokeWeight(1.5)
  for (let i = 0; i < 80; i++) {
    let x = random(width)
    let y = random(height)
    line(x, y, x + random(-20, 20), y + random(-20, 20))
  }
}
