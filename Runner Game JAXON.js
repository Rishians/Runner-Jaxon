
var Runner, Runner_running;
var path, pathImage; 

function preload(){
  
  //pre-load images
  Runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png")
}

function setup(){
  
  createCanvas(400,400);
  
  //create Runner sprites here
  Runner = createSprite(330,340,30,50)
  Runner.addAnimation("running", Runner_running);
  Runner.scale = 0.9
  
  //create path sprites here
  path.createSprite(200,200)
  path.addImage("path", pathImage);
  path.velocityY = 4
  path.scale = 1.2

}

function draw() {
  
  background(220);

  console.log(Runner.y)
 
  //jump when the space button is pressed
  if (keyDown("space") && Runner.y>150)
  {  
      Runner.velocityY = -10;
  }
  
  Runner.velocityY = Runner.velocityY + 0.8
  
  if (path.y > 400) {  
      path.y = height/2;
  }
  
  
  drawSprites()
}
