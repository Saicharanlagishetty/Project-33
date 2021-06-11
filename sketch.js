const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;
var snowfall;


function preload() {
backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world  = engine.world;
  Engine.run(engine);


snowfall = new Snowfall(200,200,10,10);

}

function draw(){
  Engine.update(engine);
  background(backgroundImg);  
  snowfall.display();
  drawSprites();
}