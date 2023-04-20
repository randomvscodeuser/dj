music = "";
music1 = "";
leftWristX = 0;
leftWristY = 0;
scoreLeftWrist = 0;
song1 = "";

rightWristX = 0;
rightWristY = 0;
function preload(){
    music = loadSound("pixel_pig.mp3");
    music1 = loadSound("dj.mp3");

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        leftWristX = pose.leftWrist.x;
        leftWristY = pose.lefftWrist.y;
        rightWristX = pose.rightWrist.x;
        rightWristY = pose.rightWrist.y;
        console.log("leftwristx = " + leftWristX + "leftwristy = " + leftWristY);
        console.log("rightwristx = " + rightWristX + "rightwristy" + rightWristY);
    }
}
function draw(){
    image(video, 0, 0, 500, 400);
    song1 = music1.isPlaying();

    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY, 20);
        music1.stop();
        if(song1 == false){
            music.play();
            document.getElementById("song").innerHTML = "playing - pixel pig";
        }
    }
}

function modelLoaded(){
    console.log("posenet is a green")
}