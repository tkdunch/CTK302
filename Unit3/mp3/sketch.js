/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" />

let geese = [];
let planePos;
let plane, goose, crash, bg, win, start;
let state = 0;
timer = 0;

function setup() {
  createCanvas(1920, 1080);
  rectMode(CENTER);
  imageMode(CENTER);
  plane = loadImage("assets/airplane.png");
  goose = loadImage("assets/goose.png");
  crash = loadImage("assets/crash.png");
  bg = loadImage("assets/bg.png");
  start = loadImage("assets/start.png");
  win = loadImage("assets/win.png");

  // Spawn objects

  for (let i = 0; i < 20; i++) {
    geese.push(new Bird());
  }

  // initialize the "frog position" vector
  planePos = createVector(width / 2, height - 80);
}

function draw() {
  switch (state) {
    case 0: // menu
    image(start, width / 2, height / 2);

      break;

    case 1: // game
      game();
      timer++; //lose screen
      if (timer > 15 * 60) {
        timer = 0;
        state = 2;
      }
      break;

    case 2: // win
    image(win, width / 2, height / 2);
      resetGame();
      break;

    case 3: // loose
      resetGame();

      image(crash, width / 2, height / 2);
      textSize(76);
      text("wow, you are a terrible pilot", width / 2, height / 2, 600, 600);
      timer++;
      if (timer > 10 * 60) {
        timer = 0;
        state = 1;
      }
      break;
  }
}

function resetGame() {
  //game reset
  geese = [];

  for (let i = 0; i < 10; i++) {
    geese.push(new Bird());
  }
  timer = 0;
}

function mouseReleased() {
  switch (state) {
    case 0: // menu
      state = 1;
      break;

    case 2: // win screen
      state = 0;
      break;

    case 3: // lose screen
      state = 0;
      break;
  }
}

function game() {
  image(bg, width / 2, height / 2);

  // operate on every car
  for (let i = 0; i < geese.length; i++) {
    geese[i].display();
    geese[i].move();
    if (geese[i].pos.dist(planePos) < 50) {
      state = 3;
      geese.splice(i, 1);
    }
  }
  if (geese.length == 0) {
    state = 2;
  }
  // add a "frog"
  image(plane, planePos.x, planePos.y, 300, 300);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) planePos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) planePos.x += 5;
  if (keyIsDown(UP_ARROW)) planePos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) planePos.y += 5;
}

class Bird {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(150, 1750), 0); // initialize your attributes here
    this.velocity = createVector(random(0), random(5, 10));
  }
  // methods

  display() {
    // this can be text, images, or shapes
    image(goose, this.pos.x, this.pos.y, 150, 150);
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
