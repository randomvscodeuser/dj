music = "";
music1 = "";
function preload(){
    music = loadSound("pixel_pig.mp3");
    music1 = loadSound("dj.mp3");
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 500, 400);
}