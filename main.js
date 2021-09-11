function preLoad(){

}

function setup(){
    canvas = createCanvas(640 , 480);
    canvas.position(150 , 150);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video , 230 , 150 , 220 , 200);
    fill(255 , 0 ,0);
    stroke(255 , 0 , 0);
    circle(50 , 50 , 80);
    circle(590, 50 , 80);
    circle(50 , 435 , 80);
    circle(590 , 435 , 80);
    fill(39 , 139 , 34);
    stroke(39 , 139 , 34);
    rect(89, 35 , 462 , 30);
    rect(89, 420, 462 , 30);
    rect(36 , 89 , 30 , 309);
    rect(575, 89 , 30 , 309);
}

function take_snapshot(){
    save('myPicture.png');
}