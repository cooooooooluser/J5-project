function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150,150);
  video = createCapture(VIDEO);
  //video.hide();
}

function draw() {
  image(video, 230, 150, 220, 200);
  
  fill(255,0,0);
  stroke(255,0,0);
  circle(50, 50, 50, 0, 2*Math.PI);
  circle(50, 100, 50, 0, 2*Math.PI);
  circle(200, 150, 50, 0, 2*Math.PI);
  circle(200, 200, 50, 0, 2*Math.PI);


  fill(255,1,1);
  stroke(255,1,1);
  


  
}

function preload() {

}
