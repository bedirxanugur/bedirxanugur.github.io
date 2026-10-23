// Son çizilen üstte — "katman" yok, sıra var
function setup() {
  createCanvas(400, 400)
  noLoop()
}

function draw() {
  background(20)
  noStroke()

  fill(0, 255, 0)
  circle(160, 200, 180)

  fill(255, 60, 60)
  circle(240, 200, 180)

  fill(255)
  textSize(14)
  text('1. yeşil', 90, 360)
  text('2. kırmızı (üstte)', 220, 360)
}
