var box
function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,30,30);
}

function draw() 
{
  background(30);
if (keyIsDown(  DOWN_ARROW)){
  background ("lime")
}

if (keyIsDown(  UP_ARROW)){
  background ("Red")
}

if (keyIsDown(  RIGHT_ARROW)){
  background ("Blue")
}

if (keyIsDown(  LEFT_ARROW)){
  background ("Black")
}



drawSprites ();
}





