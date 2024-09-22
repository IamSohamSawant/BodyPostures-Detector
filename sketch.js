let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;
let actor_img;
let specs;

function setup() {
    createCanvas(800, 500);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);
//image lavyachi kai jarag nai aahe
    actor_img = loadImage('images/Nobita.webp');
    specs = loadImage('images/specs.png');
    

}
//received poses je aahet te tu console verti direct data refer kru shakto
function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {

    // images and videos(webcam)
    image(capture, 0, 0);
    fill(255,0,0);

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
        }
//sets axis
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }
// 
        image(specs,singlePose.nose.x-65,singlePose.nose.y-60,120,90);// zara se face verti khara chasma ghalayla bhetill
        //image(smoke,singlePose.nose.x-35,singlePose.nose.y+10,80,40);
// you guys can chech it by moving your arms and showing your biceps to your own webcam 
       }


}

//LEARNING STAGE

// let capture1;
// let posenet ;
// let noseX, noseY;
// let reyeX,reyeY;
// let leyeX,leyeY;
// let singlePose;




// function setup(){
//   createCanvas(800, 500);
//   capture1 = createCapture(VIDEO);
  
//   capture1.hide();  // Hides the extra HTML element that p5 creates

//   posenet=ml5.poseNet(capture1,modelLoaded);
//   posenet.on('pose',receivedPoses);
// }

// function receivedPoses(poses){
//     console.log('Poses');

//     if(poses.length>0){
//         singlePose=poses[0].pose;
//         noseX=singlePose.nose.x;
//         noseY=singlePose.nose.y;

//         reyeX=singlePose.righteye.x;
//         reyeY=singlePose.righteye.y;

//         leyeX=singlePose.lefteye.x;
//         leyeY=singlePose.lefteye.y;
//     }
//     console.log(noseX+ " " +noseY);
// }

// function modelLoaded(){
//     console.log('Model has been loaded');
// }

// function draw(){
//   image(capture1, 0, 0,800,600);  // Matches the canvas size
//   fill(255,0,0)
//   ellipse(noseX,noseY,30,30)
// }








//let capture;
//let walter_img;

//function setup(){
   // createCanvas(900,700);
   // console.log('Setup function')
    //walter_img=loadImage('images/Nobita.webp')
    //capture=createCapture(VIDEO)
    //capture.hide()
    
//}
/*function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
*/
//function draw(){
    //image(walter_img,mouseX,mouseY,100,100);
    //image(capture,0,0,800,600);
    
//}
/*   
    //geometrical shapes using ps5.js
    r=getRandomArbitrary(0,255);
    g=getRandomArbitrary(0,255);
    b=getRandomArbitrary(0,255);
    fill(r,g,b);
    rect(mouseX,mouseY,50,50)
    console.log('draw function')
*/
/*
    // 1.point
    point(200,200)

    // 2.line
    //basically there are two sets of co-ordiantes
    //line(x1 , y1, x2, y2)
    line(200,200,300,300);

    //3.Traingle
    //now three co-ordiante
    //traingle(x1,y2,x2,y2,x3,y3)
    triangle(100,200,300,400,150,450);

    //4.Rectangle
    //two initialization and other two for height and weight
    rect(500,200,200,100)

    //5.circle
    //define one center point ,using function ellipse
    //ellipse(x,y,width.[height])
    ellipse(600,300,100,100)
*/

/*
    //stroke is basically a ouline
    //stroke is mainly used for colors
    stroke(255,0,0);
    //strokeWeight increased Obisity
    //fill function to fill the color inside it
    fill(132,100,396)
    strokeWeight(5)
    ellipse(200,300,100,100);
    stroke(0,255,0);
    ellipse(350,300,100,100);
    stroke(0,0,255);
    ellipse(500,300,100,100);
    stroke(0,0,0);
    ellipse(650,300,100,100);
    stroke(255,255,25);
    ellipse(800,300,100,100)
*/

// now we will see the use of function setup() and function draw()
// in setup its set all the reqirements that are needed in its module
// whereas in draw its showcase the result in screen 

// setup runs once and draw runs multiple times 
// function draw() can be also called as a Loop

