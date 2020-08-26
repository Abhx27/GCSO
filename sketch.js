var car,wall;
var speed, weight
function setup() {
  createCanvas(1000,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50);
  wall=createSprite(400,200,60,height/2)
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  car.collide(wall);
  drawSprites();
}
