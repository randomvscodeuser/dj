music1 = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist = 0;
song = ""
song1 = "";



function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function preload(){
    music1 = loadSound("pixel_pig.mp3");
    music2 = loadSound("dj.mp3");

    
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
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
        music2.stop();
        if(song1 == false){
            music1.play();
            document.getElementById("song").innerHTML = "playing - pixel pig";
        }
    }

    song2 = music2.isPlaying();

    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);
        music1.stop();
        if(song2 == false)
        music2.play()
        document.getElementById("song").innerHTML = "playing - the second song"

    }
}

function modelLoaded(){
    console.log("posenet is a green")
}