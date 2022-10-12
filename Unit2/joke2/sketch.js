/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" />

let state = 0;
timer = 0;
function setup() {
  createCanvas(500, 500);
  textAlign(CENTER)
}

function draw() {
  switch (state) {
    case 0:
      background("purple");
      fill("white");
      text("what is the best thing about Switzerland?", width / 2, height / 2);
      break;

    case 1:
      background("green");
      text("I don't know but the flag is a big plus!", width / 2, height / 2);
      break;
  }
  timer++;
  if (timer > 4 * 60) {
    timer = 0;
    state++;
    if (state > 4) {
      state = 0;
    }
  }
}
