var rect1,rect2,rect3,rect4;

function setup() {
 createCanvas(800,400);
 rect1=createSprite(400,200,50,100);
 rect2=createSprite(200,200,50,100);
 rect3=createSprite(600,200,50,100);
 rect4=createSprite(600,400,50,100);
 rect1.shapeColor="red";
 rect2.shapeColor="green";
 rect3.shapeColor="blue";
 rect4.shapeColor="yellow";
 rect1.debug=true;
 rect2.debug=true;
 rect3.debug=true;
 rect4.debug=true;
}

function draw() {
  rect2.y=mouseY;
  rect2.x=mouseX;

  background(0); 
  
  if(rect2.x-rect1.x<rect1.width/2+rect2.width/2&&
    rect1.x-rect2.x<rect1.width/2+rect2.width/2&&
    rect2.y-rect1.y<rect1.height/2+rect2.height/2&&
    rect1.y-rect2.y<rect1.height/2+rect2.height/2
    ){
    rect1.shapeColor="white";
    rect2.shapeColor="white";

  }else{
    rect1.shapeColor="red";
    rect2.shapeColor="green";
  }



  drawSprites();
}