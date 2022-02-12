
RightwristX=0;
LeftwristX=0;
difference=0;

function setup()
{
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    
    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initalized...");
}

function gotPoses(results)
{
if(results.length>0)
{
    LeftwristX=results[0].pose.leftWrist.x;
    RightwristX=results[0].pose.rightWrist.x;
    difference=floor(LeftwristX - RightwristX);

    console.log("LeftwristX = "+LeftwristX + "RightwristX = "+RightwristX + "differnce = " + difference);
}
}

function draw()
{
    background('');
    fill('');
    stroke('');
    text_size(80);
    text('text',182,200)
}

