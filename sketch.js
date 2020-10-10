
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

var roofObject;

var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(300, 350, 40)
	bobObject2 = new Bob(340, 350, 40);
	bobObject3 = new Bob(380, 350, 40);
	bobObject4 = new Bob(420, 350, 40);
	bobObject5 = new Bob(460, 350, 40);

	roofObject = new Roof(381,120,237,20);

	rope1 = new Rope(bobObject1.body, roofObject.body);
	rope2 = new Rope(bobObject2.body, roofObject.body);
	rope3 = new Rope(bobObject3.body, roofObject.body);
	rope4 = new Rope(bobObject4.body, roofObject.body);
	rope5 = new Rope(bobObject5.body, roofObject.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
	}
}
