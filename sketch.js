var gun1,gun1_image;  //scar_L
var bullet1,bullet1_image;

var balloon,balloon_image;
function preload(){
  gun1_image = loadImage("scar_L.png");
  bullet1_image = loadImage("bullet.png");
  balloon_image = loadImage("balloon.png");
}

function setup(){
  var canvas = createCanvas(displayWidth/2,displayHeight/2);
  gun1 = createSprite(200,400);
  gun1.addImage(gun1_image);
  gun1_image.resize(150,150);
  bullet1 = createSprite(-50,400);
  bullet1.addImage(bullet1_image);
  bullet1_image.resize(50,50);
  bullet1.visible = false;
  balloon = createSprite(random(500,800),0);
  balloon.addImage(balloon_image);
  balloon_image.resize(50,50);
}
function draw(){
  background("black");
  gun1.y = mouseY;

  balloon.velocityY = 10;
  balloon1();
  if(bullet1.isTouching(balloon)){
    balloon.destroy();
    bullet1.destroy();
  }
  drawSprites();
}
function mouseClicked(){
  if(frameCount%1 === 0 ){
    bullet1.visible = true;
    bullet1 = createSprite(260,400);
    bullet1.addImage(bullet1_image);
    bullet1_image.resize(25,25);
    bullet1.y = gun1.y - 15;
    bullet1.velocityX = 20;
  }
}
function balloon1(){
  if(frameCount % 40 === 0){
  balloon = createSprite(random(500,800),0);
  balloon.addImage(balloon_image);
  balloon_image.resize(50,50);
  balloon.velocityY = 10;
  }
  
}
