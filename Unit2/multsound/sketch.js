/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" />

let state = -1;
let s1, s2, s3;

function preload() {
  s1 = loadSound("assets/song1.mp3");
  s2 = loadSound("assets/song2.mp3");
  s3 = loadSound("assets/song3.mp3");
}
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(100);

  switch (state) {
    case -1:
      text("Cick on da button", width /2, height / 2);
      break;

    case 0:
      text("0", 100, 100);
      if (!s1.isPlaying()) {
        s1.play();
      }
      break;

    case 1:
      text("1", 100, 100);
      if (!s2.isPlaying()) {
        s2.play();
      }
      break;

    case 2:
      text("2", 100, 100);
      if (!s3.isPlaying()) {
        s3.play();
      }
      break;
  }
}

function mouseReleased() {
  s1.stop();
  s2.stop();
  s3.stop();
  state++;
  if (state > 2) state = 0;
}

function touchStarted() {
  getAudioContext().resume();
}
