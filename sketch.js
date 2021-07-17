var car, wall;
var speed, weight;

function setup() {
  createCanvas(1500,400);
  car=createSprite(50, 200, 20, 20);
  car.shapeColor = "yellow";

  wall=createSprite(1450, 200, 15, height/2);
  wall.shapeColor = "brown";

  speed=random(15,30);
  weight=random(400,1500);

  car.velocityX = speed; 
}

function draw() {
  background("black"); 

if (wall.x-car.x<(car.width+wall.width)/2) {
  car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if (deformation>100) {
car.shapeColor = "red";
  }
if (deformation<100 && deformation>100) {
  car.shapeColor = "green";
}
if (deformation<100) {
car.shapeColor = "orange";
}
}
  drawSprites();
}