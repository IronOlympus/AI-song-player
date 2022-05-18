function setup(){
    canvas = createCanvas(350, 325);
    canvas.position(465,250);

    video = createCapture(VIDEO);
    video.position(465,250);
    video.size(350,325);
}
function preload(){
    harrypottersong = loadSound('music.mp3');
    peterpansong = loadSound('music2.mp3');
}