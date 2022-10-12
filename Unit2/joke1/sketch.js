/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" />

let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
      background("why dont scientist trust atoms");
      text("why", width / 2, height / 2);
      break;
    case 1:
      background("blue");
      text("becasue they make up everything", width / 2, height / 2);
      break;
  }
}
function mouseReleased() {
  state++;
  if (state > 1) state = 0;
}
