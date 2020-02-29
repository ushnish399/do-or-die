//initializing gameStates
var PLAY=1;
var END=0;
var gameState=PLAY;

//declaring the global variables
var robot, boss, life, heart, bossimg, robotimg;
var life6img, life5img, life4img, life3img, life2img, life1img, life0img ;
var bulletgroup, bullet1group, bullet2group, bullet3group, bullet4group, bullet5group, bullet6group, bullet7group;
var health1, health2, health3, health4, health5, health6, health7 ;
var score=60, health=60;
var bullet, bullet1, bullet2, bullet3, bullet4, bullet5, bullet6, bullet7 ;
var north, northgroup, east, eastgroup, west, westgroup, south, southgroup;
var bulletimg;
var lightnimg, lightsimg, lighteimg, lightwimg, lightneimg, lightnwimg, lightseimg, lightswimg;
var sound1, sound2, sound3;

//preload function
function preload(){
  
  soundFormats('mp3', 'wav');
  
  sound2=loadSound("riochet.wav");
  sound3=loadSound("Weoponsilicon.wav");
  
  
  //loading health images
  life6img=loadImage( "sprites/lifebar6.png");
  life5img=loadImage("sprites/lifebar5.png");
  life4img=loadImage("sprites/lifebar4.png");
  life3img=loadImage("sprites/lifebar3.png");
  life2img=loadImage("sprites/lifebar2.png");
  life1img=loadImage("sprites/lifebar1.png");
  life0img=loadImage("sprites/lifebar0.png");

  //loading heart images
  health1=loadImage("sprites/healthhigh.png");
  health2=loadImage("sprites/health2.png");
  health3=loadImage("sprites/health3.png");
  health4=loadImage("sprites/health4.png");
  health5=loadImage("sprites/health5.png");
  health6=loadImage("sprites/health6.png");
  health7=loadImage("sprites/nohealth.png");

  //loading bullet images
  lightnimg=loadImage("sprites/lightup.png");
  lightsimg=loadImage("sprites/lightdown.png");
  lighteimg=loadImage("sprites/lighteast.png");
  lightwimg=loadImage("sprites/lightwest.png");
  lightneimg=loadImage("sprites/lightne.png");
  lightnwimg=loadImage("sprites/lightnw.png");
  lightseimg=loadImage("sprites/lightse.png");
  lightswimg=loadImage("sprites/lightsw.png");
  bulletimg=loadImage("sprites/bullet.png");

  bossimg=loadImage("sprites/evil robot.png");
  robotimg=loadImage("sprites/robot.png");
 }

//setup function
function setup() {
  //creating the canvas
  createCanvas(800,800);

  

  //creating sprites
  robot=createSprite(400, 400, 50, 50);
  robot.addImage(robotimg);
  robot.scale=0.1;
  boss=createSprite(400, 300, 100, 100);
  boss.addImage(bossimg);
  boss.scale=0.2;

  //creating health bars
  life=createSprite(50, 175, 20, 400);
  life.addImage(life6img);
  life.scale=0.5;

  //creating the heart bar
  heart=createSprite(750, 270, 20, 400);
  heart.addImage(health1);
  heart.scale=0.5;

  //creating the groups
  bulletgroup=new Group(); 
  bullet1group=new Group();
  bullet2group=new Group();
  bullet3group=new Group();
  bullet4group=new Group();
  bullet5group=new Group();
  bullet6group=new Group(); 
  bullet7group=new Group();
  northgroup=new Group();
  eastgroup=new Group();
  westgroup=new Group();
  southgroup=new Group();
}

//draw function
function draw() {
  //giving the background
  background("pink");

  //if gameState is PLAY
   if(gameState===PLAY){

 

    //giving AI to the boss
    if(World.frameCount % 50===0 ){
      boss.x=random(300, 700);
      boss.y=random(200, 600); 
      
    }

    //if bullets are touching the robot
    if(bulletgroup.isTouching(robot)){
      score=score-2;
      bulletgroup.destroyEach();
      sound2.play();
    }

    if(bullet1group.isTouching(robot)){
    score=score-2;
    bullet1group.destroyEach();
    sound2.play();
    }

    if(bullet2group.isTouching(robot)){
      score=score-2;
      bullet2group.destroyEach();
      sound2.play();
    }

    if(bullet3group.isTouching(robot)){
      score=score-2;
      bullet3group.destroyEach();
      sound2.play();
    }

    if(bullet4group.isTouching(robot)){
      score=score-2;
      bullet4group.destroyEach();
      sound2.play();
    }

    if(bullet5group.isTouching(robot)){
      score=score-2;
      bullet5group.destroyEach();
      sound2.play();
    }

    if(bullet6group.isTouching(robot)){
      score=score-2;
      bullet6group.destroyEach();
      sound2.play();
    }

    if(bullet7group.isTouching(robot)){
      score=score-2;
      bullet7group.destroyEach();
      sound2.play();
    }

   //giving the controls to the robot
    if(keyDown("w")&& World.frameCount % 10===0){

    north=createSprite(robot.x, robot.y, 10, 10);
    north.velocityY=-10;
    north.lifetime=80;
    north.addImage(bulletimg);
    north.scale=0.04;
   
    
    northgroup.add(north);
    }

    if(keyDown("a")&& World.frameCount % 10===0){
    
    west=createSprite(robot.x, robot.y, 10, 10);
    west.velocityX=-10;
    west.lifetime=80;
    west.addImage(bulletimg);
    west.scale=0.04;
    
    
    westgroup.add(west);
    }

    if(keyDown("d")&& World.frameCount % 10===0){
    
    east=createSprite(robot.x, robot.y, 10, 10);
    east.velocityX=10;
    east.lifetime=80;
    east.addImage(bulletimg);
    east.scale=0.04;
    
    eastgroup.add(east);
    }

    if(keyDown("s")&& World.frameCount % 10===0){
    
    south=createSprite(robot.x, robot.y, 10, 10);
    south.velocityY=10;
    south.lifetime=80;
    south.addImage(bulletimg);
    south.scale=0.04;
   
    
    southgroup.add(south);
    }

    //if the groups are touching the robot
    if(northgroup.isTouching(boss)){
      health=health-2;
      northgroup.destroyEach();
      sound3.play();
    }

    if(westgroup.isTouching(boss)){
      health=health-2;
      westgroup.destroyEach();
      sound3.play();
    }

    if(eastgroup.isTouching(boss)){
      health=health-2;
      eastgroup.destroyEach();
      sound3.play();
    }

    if(southgroup.isTouching(boss)){
      health=health-2;
      southgroup.destroyEach();
      sound3.play();
    }
    
    //giving the controls to the robot
    if(keyDown("LEFT_ARROW")){
      robot.x=robot.x-5;
       }
    if(keyDown("RIGHT_ARROW")){
      robot.x=robot.x+5;
       }
    if(keyDown("UP_ARROW")){
      robot.y=robot.y-5;
       }
    if(keyDown("DOWN_ARROW")){
      robot.y=robot.y+5;
       }
  
   //spawning the bullets    
   spawnBullets();
  
  if(score===50){
    life.addImage(life5img);
  }
   //checking the health
  if(score===40){
    life.addImage(life4img);
  }

  if(score===30){
    life.addImage(life3img);
  }

  if(score===20){
    life.addImage(life2img);
  }

  if(score===10){
    life.addImage(life1img);
  }

  //if health is zero
  if(score===0||score<0){
    life.addImage(life0img);
   
    //destroying the bullets
     bulletgroup.destroyEach();
     bullet1group.destroyEach();
     bullet2group.destroyEach();
     bullet3group.destroyEach();
     bullet4group.destroyEach();
     bullet5group.destroyEach();
     bullet6group.destroyEach();
     bullet7group.destroyEach();
  
     //bringing to original position
     boss.x=400;
     boss.y=200;

     //bringing to original position
     robot.x=400;
     robot.y=400;
     }
 

   //checking the health  
  if(health===50){
    heart.addImage(health2);
  }

  if(health===40){
    heart.addImage(health3);
  }

  if(health===30){
    heart.addImage(health4);
  }

  if(health===20){
    heart.addImage(health5);
  }

  if(health===10){
    heart.addImage(health6);
  }

  //if health is zero
  if(health===0||health<0){
    heart.addImage(health7);
  
    //destroying the bullets
     bulletgroup.destroyEach();
     bullet1group.destroyEach();
     bullet2group.destroyEach();
     bullet3group.destroyEach();
     bullet4group.destroyEach();
     bullet5group.destroyEach();
     bullet6group.destroyEach();
     bullet7group.destroyEach();
  
     //bringing to original position
     boss.x=400;
     boss.y=200;

     //bringing to original position
     robot.x=400;
     robot.y=400;
    }

    //if score is zero or less
  if(score===0||health===0||score<0||health<0){
    gameState=END;
  }
}
  //if robot gets outside the screen
if(robot.x<0||robot.x>800||robot.y>800||robot.y<0){
fill("black");
textFont("Kick The Font");
textSize(40);
text("COME INSIDE!!", 400, 600);  
  }

//if gameState is END
 if(gameState===END){
  fill("black");
  textFont("Painting With Chocolate");
  textSize(40);
  text("PRESS R TO RESTART", 200, 600);

  fill("white");
  textFont("Dungeon");
  textSize(30);
  text(" TIP:use wasd to shoot and arrows to move", 60, 450);
   
 if(health===0||health<0){
  fill("black");
  textFont("JAVATA");
  textSize(60);
  text("YOU WIN", 300, 350)
  robot.visible=false;
  boss.visible=false;
  life.visible=false;
  heart.visible=false;
   }

 if(score===0||score<0){
  fill("black");
  textFont("Bad Coma");
  textSize(60);
  text("GAME OVER", 220, 350);
  robot.visible=false;
  boss.visible=false;
  life.visible=false;
  heart.visible=false;
   }

//restart function
if(keyDown("r")){
  gameState=PLAY;
  robot.visible=true;
  boss.visible=true;
  life.visible=true;
  heart.visible=true;
  score=60;
  health=60;
  heart.addImage(health1);
  life.addImage(life6img);
  }

}
  //displaying all the sprites
   drawSprites();
}

//function spawnbullets
function spawnBullets(){
  if(World.frameCount % 45 === 0){

    //creating the bullets
    
    
    bullet=createSprite(boss.x, boss.y, 30, 30);
    bullet.velocityY=-5;
    bullet.lifetime=220;
    bullet1group.add(bullet);
    bullet.addImage(lightnimg);
    bullet.scale=0.1;

    
    bullet1=createSprite(boss.x, boss.y, 30, 30);
    bullet1.velocityY=5;
    bullet1.lifetime=220;
    bulletgroup.add(bullet1);
    bullet1.addImage(lightsimg);
    bullet1.scale=0.1;

    
    bullet2=createSprite(boss.x, boss.y, 30, 30);
    bullet2.velocityX=-5;
    bullet2.lifetime=220;
    bullet2group.add(bullet2);
    bullet2.addImage(lightwimg);
    bullet2.scale=0.1;

    
    bullet3=createSprite(boss.x, boss.y, 30, 30);
    bullet3.velocityX=5;
    bullet3.lifetime=220;
    bullet3group.add(bullet3);
    bullet3.addImage(lighteimg);
    bullet3.scale=0.1;

   
    bullet4=createSprite(boss.x, boss.y, 30, 30);
    bullet4.velocityY=-5;
    bullet4.velocityX=5;
    bullet4.lifetime=220;
    bullet4group.add(bullet4);
    bullet4.addImage(lightneimg);
    bullet4.scale=0.1;

    
    bullet5=createSprite(boss.x, boss.y, 30, 30);
    bullet5.velocityY=5;
    bullet5.velocityX=-5;
    bullet5.lifetime=220;
    bullet5group.add(bullet5);
    bullet5.addImage(lightswimg);
    bullet5.scale=0.1;

    
    bullet6=createSprite(boss.x, boss.y, 30, 30);
    bullet6.velocityX=5;
    bullet6.velocityY=5;
    bullet6.lifetime=220;
    bullet6group.add(bullet6);
    bullet6.addImage(lightseimg);
    bullet6.scale=0.1;

   
    bullet7=createSprite(boss.x, boss.y, 30, 30);
    bullet7.velocityX=-5;
    bullet7.velocityY=-5;
    bullet7.lifetime=220;
    bullet7group.add(bullet7);
    bullet7.addImage(lightnwimg);
    bullet7.scale=0.1;
  }
}