var car1, car2, car3, car4;
var wall1, wall2, wall3, wall4;
var s1, s2, s3, s4;
var w1, w2, w3, w4;
var d1, d2, d3 , d4;
var line1, line2, line3, line4;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  console.log("s = speed, w = weight, d = deformatonRate");
  car1 = createSprite(50,50,20,20);
  car1.shapeColor = 'blue';
  s1 = Math.round(random(40,100));
  w1 = Math.round(random(850,1250));
  car1.velocityX = s1;
  
  car2 = createSprite(50,150,20,20);
  car2.shapeColor ='green';
  s2 = Math.round(random(27,130)); 
  w2 = Math.round(random(1008,1786));
  car2.velocityX = s2;

  car3 = createSprite(50,250,20,20);
  car3.shapeColor = 'yellow';
  s3 =  Math.round(random(50,140));
  w3 = Math.round(random(700,1700));
  car3.velocityX = s3;

  car4 = createSprite(50,350,20,20);
  car4.shapeColor = 'orange';
  s4 =  Math.round(random(20,95));
  w4 = Math.round(random(900,1050));
  car4.velocityX = s4;
  
  carGroup = new Group();
  carGroup.add(car1);
  carGroup.add(car2);
  carGroup.add(car3);
  carGroup.add(car4);

  wall1 = createSprite(1500,50,20,80);
  wall2 = createSprite(1500,150,20,80);
  wall2 = createSprite(1500,250,20,80);
  wall4 = createSprite(1500,350,20,80);
  
  //wallGroup = new Group();
  //wallGroup.add(wall1);
  //wallGroup.add(wall2);
  //wallGroup.add(wall3);
  //wallGroup.add(wall4);


  line1 = createSprite(800,100,1600,10);
  line1.shapeColor = 'white';
  line2 = createSprite(800,200,1600,10);
  line2.shapeColor = 'white';
  line3 = createSprite(800,300,1600,10);
  line3.shapeColor = 'white';
  line4 = createSprite(800,395,1600,10);
  line4.shapeColor = 'white';
  lineGroup = new Group();
  lineGroup.add(line1);
  lineGroup.add(line2);
  lineGroup.add(line3);
  lineGroup.add(line4); 

  d1 = 0.5*w1*s1*s1/22500;
  d2 = 0.5*w2*s2*s2/22500;
  d3 = 0.5*w3*s3*s3/22500;
  d4 = 0.5*w4*s4*s4/22500;

  console.log("car 1 = "+Math.round(d1))
  console.log("car 2 = "+Math.round(d2))
  console.log("car 3 = "+Math.round(d3))
  console.log("car 4 = "+Math.round(d4))

  

  //if(carGroup.isTouching(wallGroup)){
   // carGroup.setVelocityEach(0,0);
   //}
   
}

function draw() {
  background("black");
 
  
  //lineGroup.visible = false;

  drawSprites();
}