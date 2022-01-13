const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var snow =[];
function preload(){
  bgimg = loadImage("snow3.jpg");

}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  if(frameCount%60===0){
    for(var i = 0;i<200;i++){
      snow.push(new createsnow(random(0,800),random(0,800)));
    }
  }
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  for(var i = 0;i<200;i++){
    snow[i].showDrop();
    snow[i].updateY();
  }

  drawSprites();

}