/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" />

let x = 0;
let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/cherl.ttf");
}

function draw() {
  background(100)
  fill("white");
  textFont(f1, 48)
  text("KEEP ON KEEPIN ON", x, 250);
  x++;
if (x > width) {
  x = 0;
}
}
