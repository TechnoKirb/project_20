var bg, sleep, gym, eat, drink, move, abg, dude, brush, bath
function preload() {
  sleep = loadAnimation('images/sleep.png')
  bg = loadImage('images/iss.png')
  brush = loadAnimation('images/brush.png')
  gym = loadAnimation('images/gym1.png','images/gym2.png')
  eat = loadAnimation('images/eat1.png','images/eat2.png')
  drink = loadAnimation('images/drink1.png','images/drink2.png')
  move = loadAnimation('images/move.png','images/move1.png')
  bath = loadAnimation('images/bath1.png','images/bath2.png')
}

function setup() {
  createCanvas(800,400);
  abg = createSprite(400, 200, 50, 50);
  abg.addImage(bg)
  dude = createSprite(400,200,50,50)
  dude.addAnimation('the_guy',sleep)
  dude.scale = 0.1
}

function draw() {
  background(255,255,255);  
  drawSprites();
  text('Instructions: Up = Brush, Down = Excersize, Left = Eat, Right = Bath, m = moving')
  edges = createEdgeSprites()
  dude.bounceOff(edges)
  if (keyDown("UP_ARROW")){
    dude.addAnimation('a', brush)
    dude.changeAnimation('a')
    dude.y = 350
    dude.velocityX = 0
    dude.velocityY = 0
  }
  if (keyDown("DOWN_ARROW")){
    dude.addAnimation('b', gym)
    dude.changeAnimation('b')
    dude.y = 350
    dude.velocityX = 0
    dude.velocityY = 0
  }
  if (keyDown("LEFT_ARROW")){
    dude.addAnimation('c', eat)
    dude.changeAnimation('c')
    dude.y = 350
    dude.velocityX = 0
    dude.velocityY = 0
  }
  if (keyDown("RIGHT_ARROW")){
    dude.addAnimation('d', bath)
    dude.changeAnimation('d')
    dude.y = 350
    dude.velocityX = 0
    dude.velocityY = 0
  }
  if (keyDown("m")){
    dude.addAnimation('e', move)
    dude.changeAnimation('e')
    dude.y = 350
    dude.velocityX = 3
    dude.velocityY = 3
  }
}