
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var RunningSprite
var ground
var distance = 200
var groundvar = 1
var GrounImg
var car
var GameEnd, GameImg

function preload()
{

}

function setup() {
	createCanvas(displayWidth-40,displayHeight/4);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = createSprite(400,680,displayWidth*10,40)
	RunningSprite = createSprite(distance,610,100,100)
	Engine.run(engine);
	GrounImg = loadImage("track.jpg")
	car = loadImage("car.png")
	GameEnd = createSprite(20,30,100,100)
	GameImg = loadImage("End.jpg")

	RunningSprite.scale = 0.2
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  score = frameCount/120
  ground.addImage(GrounImg)
  ground.display();
  RunningSprite.addImage(car)
  RunningSprite.display();
  GameEnd.addImage(GameImg);
  GameEnd.display(false)
  if(RunningSprite.x>=4000){
	RunningSprite.velocityX=0
	GameEnd.display(true);
	textSize(20)
	text("Score : "+score,20,30);
  }
  camera.position.x = RunningSprite.x
  camera.position.y = displayHeight/2
  drawSprites();
  

}
function keyPressed(){
    if (keyCode == 32){
        RunningSprite.velocityX = RunningSprite.velocityX+2
    }
}