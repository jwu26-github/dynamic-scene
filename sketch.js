function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(173, 216, 230)

//buildings
  fill (GRAY)
rect (40, 100, 40, 400)
rect (100, 100, 40, 400)
rect (160, 100, 40, 400)
rect (220, 100, 40, 400)
rect (280, 100, 40, 400)

//grass
fill("green"); 
rect(0, 350, 400, 400);
  
 //sun
  fill("yellow");
  circle(400, 50, 100);
}