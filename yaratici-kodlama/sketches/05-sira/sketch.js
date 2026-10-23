// Sol: fill SONRA (yanlış) · Sağ: fill ÖNCE (doğru)
function setup() {
  createCanvas(400, 400)
  noLoop()
}

function draw() {
  background(20)
  noStroke()

  // --- YANLIŞ: önce çiz, sonra fill ---
  ellipse(120, 200, 120)
  fill(255, 0, 0)

  fill(255)
  textSize(13)
  text('fill sonra', 70, 80)

  stroke(0, 255, 0)
  strokeWeight(2)
  line(200, 40, 200, 360)

  noStroke()
  fill(255, 0, 0)
  ellipse(300, 200, 120)

  fill(255)
  text('fill önce', 260, 80)
}
