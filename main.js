var leftwristy;
var rightwristy;
function setup(){
    canvas = createCanvas(350, 325);
    canvas.position(465,250);

    video = createCapture(VIDEO);
    video.position(465,250);
    video.size(350,325);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function preload(){
    harrypottersong = loadSound('music.mp3');
    peterpansong = loadSound('music2.mp3');
}
function gotPoses(results){
    if(results.length > 0){
        leftwristy = results[0].pose.leftWrist.y;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("Left wrist Y : " + leftwristy + " Right wrist Y : " + rightwristy);
        check();
    }
}
function modelLoaded(){
    console.log("Model Initialized");
}
function check(){
    if(rightwristy > 320){
        harrypottersong.play();
        peterpansong.stop();
    }
    if(leftwristy > 320){
        peterpansong.play();
        harrypottersong.stop();
    }
}
