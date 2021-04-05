var  f ,m,o1,o2;




function setup() {
  createCanvas(800,400);
 f= createSprite(400, 200, 50, 50); 
 m= createSprite(600, 300, 50, 50);
 o1= createSprite(400, 400, 50, 50); 
 o2= createSprite(300, 100, 50, 50);
 
 
 f.shapeColor="green"
 m.shapeColor="green"
 
 o1.shapeColor="green"
 o2.shapeColor="green"
}

function draw() {
  background(255,255,255); 
  m.x=World.mouseX
  m.y=World.mouseY
console.log(m.x-f.x)
 if (isTouching(m,o2)){
o2.shapeColor="red"
m.shapeColor="red"}
else{
o2.shapeColor="green"
m.shapeColor="green"}
  drawSprites();
}

