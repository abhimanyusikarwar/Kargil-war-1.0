const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var soldier;
var enemy;
var img;
var ground;
var flag;
var fl;
var gameState=0;
//var Button;

function preload(){
  img=loadImage("images/mount.png");
  fl=loadImage("images/Indianflag.png");
}

function setup() {
  createCanvas(1200,750);

  database = firebase.database();

  engine=Engine.create();
  world=engine.world;
  soldier= new Soldier(400,550,150,150);
  enemy= new Enemy(870,80,200,100);
  ground=new Mountains(600,650,1200,10); 
  flag=createSprite(550,550,20,20);
  flag.addImage(fl);
  flag.scale=0.5;
  //Button=createSprite(800,460,40,20);
}

function draw() {
  background(img);
  Engine.update(engine);
  if(gameState===0){
    soldier.display(); 
    enemy.display();
    
   //ground.display();
   textSize(20);
  fill("white");
  text("point 4574",830,60);
  fill("black");
text("13 JAK rifles have been targeted to recapture the point 4574 click on space to start the game ",200,375);
text("Kargi WAR",750,400);
drawSprites();
  if(keyDown("space")){
    gameState=1;
  }
  }
  if(gameState===1){
    textSize(24);
    fill("black");
text("gameStarted",800,150);
soldier.display(); 
    enemy.display();
    
  }
  
  
  
  
}