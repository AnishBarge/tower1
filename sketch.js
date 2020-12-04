const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground,platform,platform1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
  stroke(255)
  ground = new Ground(600,height,1200,20);
  platform = new Ground(350,400,200,20)
 platform1 = new Ground(650,350,200,20)
 block1 = new block(650,450)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("brown");  
  Engine.update(engine);
  platform.shapeColor="blue"
  ground.display()
  platform.display()
  platform1.display()
  block1.display()
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
 
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 