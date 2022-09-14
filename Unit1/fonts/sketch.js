let f1, f2, f3;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/cherl.ttf");
  f2 = loadFont("assets/harry.ttf");
  f3 = loadFont("assets/walt.ttf");
  textAlign(CENTER);
}

function draw() {
background("black");
fill("white")
textFont(f1, 48);
text("hello there", width/2, 100);
textFont(f2, 24);
text("general keneobi", width/2, 200);
textFont(f3, 24);
text("the end.", width/2, 300);
}
