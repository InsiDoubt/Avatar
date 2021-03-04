class Rainy {
  constructor(_xPos, _yPos) {
    this.xPos = _xPos;
    this.yPos = _yPos;
  }
  display() {
    push();
    translate(this.xPos, this.yPos);
    fill(bone);
    stroke(0)
    circle(0, 0, width * .05);
    fill(hole);
    circle(0, 0, width * .015);
    pop();
  }
  move() {
    this.yPos += (Math.random()+.5) * 7;
    this.xPos += Math.random() *3;
    if (this.yPos >= ((width) * 1.05)) {
      this.yPos = (height * -.1);
      this.xPos = (width *.8 * Math.random());
    }
  }
}