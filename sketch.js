let running_out_of_roses = "";
let alone = "";

function preload() {
  alone = loadMusic("assets/alone.mp3");
  running_out_of_roses = loadMusic("assets/running_ou_of_roses.mp3");
}

function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 600, 500);
}
