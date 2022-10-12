/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" />

let state = 0;
let z1, z2, z3, s1
timer = 0;
let x = 0;

function preload() {
  s1 = loadSound("assets/zomb.mp3");

}

function setup() {
  createCanvas(500, 500);
  //zombie asset

  z1 = loadImage("assets/zomb.png");
  z2 = loadImage("assets/bg.png");
  z3 = loadImage("assets/ded.png");
}

function draw() {
  switch (state) {
    case 0:
      background(z2);
      textSize(20)
      fill("white")
      text("quick shoot him", x, 200);
      image(z1, 200, 200, 200, 200);
      x += 2;
      if (x > width) {
        x = 0;
      }
      break;
    case 1:
      background(z2);
      text("oh no you're being overran", 100, 100);
      image(z1, 350, 250, 100, 100);
      image(z1, 400, 200, 150, 150);
      //image(z1, 100, 200, 200, 200);
      //image(z1, 200, 200, 200, 200);
      image(z1, 200, 300, 500, 500);
      image(z1, 100, 300, 300, 300);
      image(z1, 100, 200, 100, 100);
      image(z1, 75, 200, 100, 100);
      
      break;
    case 3:
      background(z3);
      fill("white");
      textSize(46);
      text("dead", 250, 250);
      break;
  }

  timer++;
  if (timer > 4 * 60) {
    timer = 0;
    state++;
    if (state > 3) {
      state = 0;
    }
  }
}
function mouseReleased() {
  if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300) {
    state++;
    if (state > 1) state = 1;
  }
}

function touchStarted() {
  getAudioContext().resume();
}