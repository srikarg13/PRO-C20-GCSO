var car, wall;
var speed,weight;






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  wall=createSprite(1500,200,60, height/2)
  car=createSprite(50,200,50,50);
  car.velocity = speed;
  if(wall.x-car.x<(car.width+wall.width)/2)
 { 
  if(deformation>180)
   {
    car.shapeColor=color9230,(255,230,0)
   }
   if(deformation<180 && deformation,100)
   {

    car.shapeColor=color(230,230,0)
   }

   if(deformation<100)
   {
     car.shapeColor(0,255,0)
   }

  }
}

function draw() {
  background(255,255,255);  
  drawSprites();

  
}