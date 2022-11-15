var bubbles = [];
let url = "";

function setup() {
//link to google survey
//https://docs.google.com/forms/d/e/1FAIpQLSdkWT9EHG7nJ9BBS-fgZ5e-Gfcc1utCb_DZUsDhvzXYD_BZYA/viewform?fbclid=IwAR2SUxBaiPcEMFtqqIwgLGxO_k85LexoG1Z-IcLtVDcZ6oSV0G2lrFclX6Y

let key = "1JVzeNcfA53XcRj3kKjJgy2ZIbEPqHzT9aaugxvjB3mA"; // this is KEY of the URL from the sheet
  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What is your name?"],
        data[i]["What is your favorite color?"],
        data[i]["What is the air speed of a laden swallow?"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background("purple");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(happy, thankful, name) {
    // only the order of these parameters matters!
    this.happy = happy;
    this.thankful = thankful;
    this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(1, 3), 0);
  }

  display() {
    stroke("black");
    strokeWeight(3)
    fill("white");
    ellipse(this.pos.x, this.pos.y+10, 225, 225);
   fill("black");
noStroke()
    text(
      this.name + "\n" + this.happy + "\n" + this.thankful,
      this.pos.x,
      this.pos.y
    );
  
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
    
  }
  
  
}
