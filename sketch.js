const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var o1;
var p1;
var b1;
var sb;

function preload(){
 sb = loadImage("Jungle Map/Platformer/Bridge_01.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  o1 = new Background(100,100);
  p1 = new Knight(100,50);
  p2 = new Mage(200,50,20,20);
  b1 = new Block(140,150,245,20);
  b2 = new Block(10,75,20,170);
  b3 = createSprite(100,100,20,20);
  b3.addImage(sb);
  
}

function draw() {
  background("green");  
  Engine.update(engine);
  o1.display();
  p1.display();
  p2.display();
  b1.display();
  b2.display();

  drawSprites();
}

