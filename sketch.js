let yPos;
let mic;
let micLevel;
let mouseColor1;
let mouseColor2;
let mouseColor3;
let mouseColor4;
let eyeballColor;
let mouseSize;
let specterMove = 0;
let rainy1;
let rainy2;
let rainy3;
let rainy4;

let itRain = [];

function setup() {
  angleMode(DEGREES)
  frameRate(30);

  //colors
  bone = color(255, 255, 255);
  eyeballColor = color(255, 100, 100);
  hole = color(0);

  //mic stuff
  mic = new p5.AudioIn()
  mic.start();

  rainy1 = new Rainy(300, 100);
  rainy2 = new Rainy(0, 0);
  rainy3 = new Rainy(100, 200)
  rainy4 = new Rainy(300, 0)

  
  for (let i = 0; i < 10; i++) {
    itRain[i] = new
    Rainy(random(0,width),random(0,height));
  }
  
}

function draw() {
  //console.log("mic is this angery " + mic.getLevel());
  createCanvas(400, 400);
  background(0);
  //console.log(frameCount);

  //This is for the jaw
  yPosM = map(mic.getLevel(), 0, .5, -50, 0);

  //This is for funDots! You will be avenged
  //xPosFun = (width * Math.random());
  //yPosFun = (height * Math.random());

  //mouseColor1 =
  mouseColor2 = (mouseX);
  mouseColor3 = (mouseY);
  mouseColor4 = (mouseX + mouseY);
  mouseSize = (mouseX - mouseY);
  //console.log(mouseSize);


  //rainy1.display();
  //rainy2.display();
  //rainy1.move();
  //rainy2.move();
  //rainy3.display();
  //rainy4.display();
  //rainy3.move();
  //rainy4.move();
  for (let i = 0; i < 10; i++) {
    itRain[i].display();
    itRain[i].move();
  }
  
  drawJaw(yPosM);
  drawFace();
  drawNose();
  drawEyeSocket();
  drawEyeball();
  drawSpecter();


  if ((frameCount % 2 == 0)) {
    specterMove = specterMove + 5;
  }

  if (frameCount > (120)) {
    specterMove = specterMove - 5;
  }
  if (specterMove < (height * .2)) {
    specterMove = specterMove + 5;
  }
}




//Here There Be Function Definitions

function drawJaw() {
  push()
  translate(0, yPosM)
  fill(bone);
  beginShape();
  vertex(width * .15, height * .4);
  vertex(width * .3, height * .4);
  vertex(width * .4, height * .9);
  vertex(width * .6, height * .9);
  vertex(width * .7, height * .4);
  vertex(width * .85, height * .4);
  vertex(width * .7, height * .9);
  vertex(width * .55, height * .975);
  vertex(width * .45, height * .975);
  vertex(width * .3, height * .9);
  endShape();
  pop()
  //console.log(mouseY);
}

function drawFace() {
  //Draw Face
  fill(bone);
  noStroke();
  circle(width * .5, height * .4, width * .75);
}

function drawNose() {
  //Nose
  fill(hole)
  beginShape();
  vertex(width * .5, height * .5);
  vertex(width * .4, height * .6);
  vertex(width * .6, height * .6);
  endShape();
}

function drawEyeSocket() {
  //EyeSocket
  fill(hole);
  circle(width * .35, height * .35, width * .2);
  circle(width * .65, height * .35, width * .2);
}

function drawEyeball() {
  //Eyeball
  fill(eyeballColor);
  circle(width * .65, height * .35, width * .15);
  //console.log(eyeballColor);

  if (mouseX > width * 0.575 && mouseX < width * 0.725 && mouseY > height * .275 && mouseY < height * .425) {
    eyeballColor = color(0, 0, 0);
  } else {
    eyeballColor = color(255, 100, 100);
  }

}

function drawSpecter() {
  fill(bone);
  stroke(0)
  circle(width * .35, (height * 0.15) + specterMove, width * .15);
  fill(hole);
  circle(width * .35, (height * 0.15) + specterMove, width * .05);
}