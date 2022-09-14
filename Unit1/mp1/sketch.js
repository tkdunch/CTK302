/// <reference path="../../libs/TSDef/p5.global-mode.d.ts" />

let s1;

function setup(){
  createCanvas(720, 400);
  }
function preload() {
  s1 = loadSound("assets/scream.mp3");
}

function mousePressed(){
  s1.play();
}
function draw() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    background("lightblue");
    noStroke();
  if (mouseIsPressed) {

    background(random(1, 255));

//sun
   fill("white");
   arc(300, 350, 280, 280, PI, TWO_PI) ;
   
   fill("black");
   circle(240, 270, 70);
   
   fill(random(2, 255));
   circle (240,270, 25);
   
   fill("black");
   circle(360,270,70);
   
   fill(random(2, 255));
   circle (360,270, 25);

//ground

   fill("black");
   rect(0, 350, 1000, 100);

//tree
    
   fill("orange");
   rect(75, 283, 50, 67);
 
   fill("purple");
   triangle(30, 287, 184, 287, 103, 164);
   
   fill("purple");
   triangle(50 , 216, 170, 216, 103, 112);
   
   fill("purple");
   triangle(71 , 156, 141, 156, 103, 82);
  
 //tree 
 
   fill("orange");
   rect(10, 283, 50, 67);
 
   fill("purple");
   
   triangle(-30, 300, 124, 300, 43, 164);
   
   fill("purple");
   triangle(-10 , 216, 110, 216, 43, 112);
   
 //tree
   
    fill("orange");
   rect(475, 283, 50, 67);
 
   fill("purple");
   triangle(430, 287, 584, 287, 503, 164);
   
   fill("purple");
   triangle(450 , 216, 570, 216, 503, 112);
   
   fill("purple");
   triangle(471 , 146, 541, 146, 503, 72);
 
 //tree
   
    fill("orange");
   rect(575, 283, 50, 67);
 
   fill("purple");
   triangle(530, 307, 684, 307, 603, 184);
   
   fill("purple");
   triangle(550 , 236, 670, 236, 603, 132);
   
   fill("purple");
   triangle(571 , 166, 641, 166, 603, 92);
   
  }

  else {
//ground
    fill("black");
   rect(0, 350, 1000, 100);

//sun
    fill("yellow");
    arc(300, 350, 280, 280, PI, TWO_PI) ;
    
    fill("white");
    circle(240, 270, 70);
    
    fill("black");
    circle (240,270, 25);
    
    fill("white");
    circle(360,270,70);
    
    fill("black");
    circle (360,270, 25);
    
//tree
    
    fill("brown");
    rect(75, 283, 50, 67);
  
    fill("green");
    triangle(30, 287, 184, 287, 103, 164);
    
    fill("green");
    triangle(50 , 216, 170, 216, 103, 112);
    
    fill("green");
    triangle(71 , 156, 141, 156, 103, 82);
   
   
  //tree 
  
    fill("brown");
    rect(10, 283, 50, 67);
  
    fill("green");
    
    triangle(-30, 300, 124, 300, 43, 164);
    
    fill("green");
    triangle(-10 , 216, 110, 216, 43, 112);
    
  //tree
    
     fill("brown");
    rect(475, 283, 50, 67);
  
    fill("green");
    triangle(430, 287, 584, 287, 503, 164);
    
    fill("green");
    triangle(450 , 216, 570, 216, 503, 112);
    
    fill("green");
    triangle(471 , 146, 541, 146, 503, 72);
  
  //tree
    
     fill("brown");
    rect(575, 283, 50, 67);
  
    fill("green");
    triangle(530, 307, 684, 307, 603, 184);
    
    fill("green");
    triangle(550 , 236, 670, 236, 603, 132);
    
    fill("green");
    triangle(571 , 166, 641, 166, 603, 92);
    fill("black ")
  }

  if (mouseIsPressed) {
    fill("white");
    textSize(24);
    text("the night sun is angry.", 250,390);
  }

  else {
    
  }
    
 
    text(mouseX + "," + mouseY, 20,20) ;
  
  }
   function mouseReleased (){
    print(mouseX + "," + mouseY, 20,20) ;
  }
  