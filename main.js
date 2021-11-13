noseX = 0;
noseY = 0;

function preload() {
mustache = loadImage("unnamed.png");
}

function setup() {
    canvas = createCanvas(400,300);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
   canvas.center();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Posenet is intialiazed");

}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y - 15;
        console.log("nose x  = " + noseX);
        console.log("nose y = " + noseY);
    }
}
function draw() {
    image(video,0,0,400,300);
    image(mustache,noseX,noseY,100,60);
}

function take_snapshot() {
    save("mustache_filter.jpg")
}
