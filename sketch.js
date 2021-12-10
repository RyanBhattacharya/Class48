var Alien1,alien2,Alien5,Ship,Pixel 
var Alien1Img,alien2Img,Alien5Img,ShipImg,BackgroundImg,PixelImg
var score=0;
var life=5;
var score=0;
var gamestate=1;
var Background;
var PixelGroup,Alien1Group,Alien2Group;


function preload(){

  Alien1Img = loadImage("Alien-1.png")
  alien2Img = loadImage("alien-2.png")
 
  ShipImg = loadImage("Pixel-Spaceship.png")
  BackroundImg = loadImage("Backround.png")
  PixelImg = loadImage("PixelBullet2.png")
}

function setup() {
  createCanvas(800,800);
  Alien1=createSprite(0,100,50,50)
 
  
  
  Alien1.addImage(Alien1Img)
  Alien1.scale=0.15
  alien2=createSprite(250,160,50,50)
  alien2.addImage(alien2Img)
  alien2.scale=0.15
  Ship=createSprite(400,700,50,50)
  Ship.addImage(ShipImg)
  Ship.scale=0.15
  PixelGroup=createGroup();
  Alien1Group=createGroup();
  Alien2Group=createGroup();
 
  //Background= createSprite(0, 0, 800,800);
  //Background.addImage(BackroundImg)
}

function draw(){
  background(BackroundImg)
  
  
 Ship.x=mouseX
 if(keyDown("space")){
   shootbullet()
 }
 

  if(Alien1.x==0)
  {
  Alien1.velocityX=3
  }
  if(Alien1.x>800)
  { 
  Alien1.velocityX=-3
  }
  Alien1Group.add(Alien1)
  if(alien2.x==250)
  {
  alien2.velocityX=3
  }
  if(alien2.x>800) {
  
  alien2.velocityX=-3 
  }
  Alien2Group.add(alien2)
 
 if(PixelGroup.isTouching(Alien1))
 {
  Alien1.destroy()
  

 }
 if(PixelGroup.isTouching(alien2)) 
{
  alien2.destroy()
}
 
  //Alien1.x=(random(20,800))
  drawSprites()
}

function shootbullet(){
  Pixel=createSprite(350,650,50,50)
  Pixel.addImage(PixelImg)
  Pixel.x=Ship.x
  Pixel.scale=0.035
  Pixel.velocityY=-7
  PixelGroup.add(Pixel)
  
}
 


