var car1,car2,car3,car4,wall
var weigth1, speed1, weigth2, speed2, weigth3, speed3, weight4, speed4


function setup() {
  createCanvas(1600,500);
  speed1 = random(20, 130)
  weight1 = random(400, 1800)

  speed2 = random(20, 120)
  weight2 = random(400, 1800)

  speed3 = random(20, 130)
  weight3 = random(400, 1800)

  speed4 = random(20, 120)
  weight4 = random(400, 1800)

  car1 = createSprite(-30,50, 50, 20);
  car1.shapeColor = "white"
  
  car2 = createSprite(-60, 150, 50, 20);
  car2.shapeColor = "white"

  car3 = createSprite(-90, 250, 50, 20);
  car3.shapeColor = "white"
  
  car4 = createSprite(-120, 350, 50, 20);
  car4.shapeColor = "white"

  wall = createSprite(1550,200,20,600)
  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;
  
}

function draw() {
  background("black");
  
  textSize(30);
  stroke("red");
  text("Above 180", 1200,450);
  
  textSize(30);
  stroke("yellow");
  text("Between 80 - 180", 600,450);

  textSize(30);
  stroke("blue");
  text("Below 80", 100,450);

  if (wall.x-car1.x<=(car1.width+wall.width)/2) {
    car1.velocityX = 0;
    var deformation = 0.5*weight1*speed1*speed1/22500;
  if (deformation > 180){
    car1.shapeColor = "red"
   }
   else{ if(deformation < 180){
     car1.shapeColor = "yellow"
     }
   }

  if (deformation < 180 && deformation> 80){
    car1.shapeColor = "yellow"
   }
   else{ if(deformation > 180){
    car1.shapeColor = "red"
   }
  }
  if (deformation < 80){
    car1.shapeColor = "blue"
   }
  }

  if (wall.x-car2.x<=(car2.width+wall.width)/2) {
    car2.velocityX = 0;
    var deformation = 0.5*weight2*speed2*speed2/22500;
  if (deformation > 180){
    car2.shapeColor = "red"
   }
   else{ if(deformation < 180){
     car2.shapeColor = "yellow"
     }
   }

  if (deformation < 180 && deformation> 80){
    car2.shapeColor = "yellow"
   }
   else{ if(deformation > 180){
    car2.shapeColor = "red"
   }
  }
  if (deformation < 80){
    car2.shapeColor = "blue"
   }
  }

  if (wall.x-car3.x<=(car3.width+wall.width)/2) {
    car3.velocityX = 0;
    var deformation = 0.5*weight3*speed3*speed3/22500;
  if (deformation > 180){
    car3.shapeColor = "red"
   }
   else{ if(deformation < 180){
     car3.shapeColor = "yellow"
     }
   }

  if (deformation < 180 && deformation> 80){
    car3.shapeColor = "yellow"
   }
   else{ if(deformation > 180){
    car3.shapeColor = "red"
   }
  }
  if (deformation < 80){
    car3.shapeColor = "blue"
   }
  }

  if (wall.x-car4.x<=(car4.width+wall.width)/2) {
    car4.velocityX = 0;
    var deformation = 0.5*weight4*speed4*speed4/22500;
  if (deformation > 180){
    car4.shapeColor = "red"
   }
   else{ if(deformation < 180){
     car4.shapeColor = "yellow"
     }
   }

  if (deformation < 180 && deformation> 80){
    car4.shapeColor = "yellow"
   }
   else{ if(deformation > 180){
    car4.shapeColor = "red"
   }
  }
  if (deformation < 80){
    car4.shapeColor = "blue"
   }
  }
  
  drawSprites();
}