
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,tree;
var  mango1,mango2,mango3,mango4,mango5,mango6,mango7;
function preload() {
   
}

function setup(){
    createCanvas(1200,900);
    
	engine = Engine.create();
	world = engine.world;
    ground = new Ground(600,850,1200,20);
      tree = new Tree(900,465,600,800);
      tree.scale=11;

    mango1 = new mango(100,200,10);
   
    
   
}

function draw(){
   background(225);
   Engine.update(engine);
   
   ground.display();
   tree.display();
  mango1.display();
//   mango2.display();
//   mango3.display();
//   mango4.display();
//   mango5.display();
//   mango6.display();
//   mango7.display();
}

