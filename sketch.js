var car,wall;
var speed, weight
function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight = random(400,1500)
car = createSprite(50,200,50,50);
wall = createSprite(1500,200,50,50);
  car.velocityX = speed;
  deformation = 0.5*weight*speed*speed/22500
  speed = speed - deformation
  if(speed< 100){
    car.shapeColor=color(0,255,0);
  } 
  

  if(speed = (speed> 100 && speed< 180)){
    car.shapeColor=color(230,230,0);
  } 

  if(speed > 180){
    car.shapeColor=color(255,0,0);
  } 
}

function draw() {
  background(0,0,0); 
  car.collide(wall);
  drawSprites();
}
