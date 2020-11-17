//creating the variables
var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
   
  //setting random values for the variables
  speed =random(50,90);
  weight=random(400,1500);

  // creating a car sprite,assigning it a velocity
   car = createSprite(50,200,50,50);
   car.velocityX=speed;
 
  // creating a wall sprite,setting a shapeColor
    wall = createSprite(1500,200,60,height/2);
    wall.shapeColor=color(80,80,80);

  
  
}

function draw() {
  background(255,255,255);  

// color change in cars function
if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX=0;
  var deformation = 0.5*width*speed*speed/22500;
  
  //red
  if(deformation>100){
  car.shapeColor=color(0,255,0);
  }
  
  //yellow
  if(deformation>100 && deformation>180){
  car.shapeColor=color(230,230,0);
  }
  
  //green
  if(deformation>190){
  car.shapeColor=color(255,0,0);
  }
 car.x=wall.x-(car.width/2+wall.width/2);
}


drawSprites();
}