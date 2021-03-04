var car1,car2,car3,car4,wall;
var speed,weight;
var engine,world;
var lin1,lin2,lin3,lin4;

function setup() {
  createCanvas(1600,400); 

  
  car1=createSprite(90,90,25,25);
  lin1=createSprite(100,100,width*2,7);
  car2=createSprite(190,190,25,25);
  lin2=createSprite(200,200,width*2,7);
  car3=createSprite(290,290,25,25);
  lin3=createSprite(300,300,width*2,7);
  car4=createSprite(390,390,25,25);
  lin4=createSprite(397,397,width*2,7);
  wall=createSprite(1500,200,10,height);
  speed=random(55,90);
  weight=random(400,1500);
  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
  wall.shapeColor="white" ;
  lin1.shapeColor="blue";
  lin2.shapeColor="blue";
  lin3.shapeColor="blue";
  lin4.shapeColor="blue";

  
  
}

function draw() {
  background(0,0,0);  

  if(wall.x-car1.x<(car1.width+wall.width)/2){
    car1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    
    if(deformation>180){
      car1.shapeColor=color(204,0,0);
    }
    
    if(deformation<180 && deformation>100){
      car1.shapeColor=color(230,230,0);
    }
    
    if(deformation<100){
      car1.shapeColor=color(0,255,0);
    }

  }
  if(wall.x-car2.x<(car2.width+wall.width)/2){
    car2.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    
    if(deformation>180){
      car2.shapeColor=color(255,0,0);
    }
    
    if(deformation<180 && deformation>100){
      car2.shapeColor=color(230,230,0);
    }
    
    if(deformation<100){
      car2.shapeColor=color(0,255,0);
    }}

    if(wall.x-car3.x<(car3.width+wall.width)/2){
      car3.velocityX=0;
      var deformation=0.5*weight*speed*speed/22500;
      
      if(deformation>180){
        car3.shapeColor=color(255,0,0);
      }
      
      if(deformation<180 && deformation>100){
        car3.shapeColor=color(230,230,0);
      }
      
      if(deformation<100){
        car3.shapeColor=color(0,255,0);
      }
    }

    if(wall.x-car4.x<(car4.width+wall.width)/2){
      car4.velocityX=0;
      var deformation=0.5*weight*speed*speed/22500;
      
      if(deformation>180){
        car4.shapeColor=color(255,0,0);
      }
      
      if(deformation<180 && deformation>100){
        car4.shapeColor=color(230,230,0);
      }
      
      if(deformation<100){
        car4.shapeColor=color(0,255,0);
      }
    }
  
  drawSprites();
}