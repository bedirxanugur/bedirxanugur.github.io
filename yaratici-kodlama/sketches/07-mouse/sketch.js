// mouseX / mouseY — örnek konum (statik)
function setup() {
  createCanvas(400, 400)
  noLoop()
}

function draw() {
  background(20)
  let mx = 260
  let my = 180

  noStroke()
  fill(0, 255, 0)
  circle(mx, my, 36)

  fill(255)
  textSize(14)
  text('örnek: mouseX = ' + mx, 16, 28)
  text('örnek: mouseY = ' + my, 16, 48)
  text('(canlıda fareyi hareket ettir)', 16, height - 16)
}
