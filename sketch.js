/*probably use setTimeout for the delays*/

let cnvwidth = window.innerWidth;

let cnvheight = window.innerHeight - 50;

let elipsexc = 500;
let elipseyc = 500;

let cnv;

var song;

function preload() {
  song = loadSound("synth_circle.wav");
}

let circleVolume = 3

function setup() {
  let x2 = mouseX;
  let y2 = mouseY;
  let maxDistance = 400
  let d = dist(elipsexc, elipseyc, mouseX, mouseY);
  cnv = createCanvas(cnvwidth, cnvheight);
  centerCanvas();
  background(255, 0, 200);
  song.play();
  song.setVolume(circleVolume)
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

//canvas above//


//draw bellow//

function draw() {
  background(200);

  push();
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 5;
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = 'gray'
    noStroke()
    fill(175,175,175,100)
    ellipse(elipsexc,elipseyc,80)
  pop()


  push();
    line(elipsexc, elipseyc, x2, y2);
    translate((elipsexc + x2) / 2, (elipseyc + y2) / 2);
    rotate(atan2(y2 - elipseyc, x2 - elipsexc));
    text(nfc(d, 1), 0, -5);
  pop();
}
