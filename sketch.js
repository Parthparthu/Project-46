var cycleR, cycleM, cycleU;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var bricksGroup, brick1, brick2, brick3/*, brick4, brick5, brick6*/;
var backgroundI;

var score = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver, restart;

function preload() {

  cycleM = loadAnimation("cycle1.png", "cycle2.png", "cycle3.png", "cycle4.png", "cycle5.png", "cycle6.png");
  cycleU = loadImage("cycleUp.png");

  groundImage = loadImage("ground.jpeg");

  //cloudImage = loadImage("cloud.png");

  brick1 = loadImage("brick1.png");
  brick2 = loadImage("brick2.png");
  brick3 = loadImage("brick3.png");
  /*brick4 = loadImage("brick4.png");
  brick5 = loadImage("brick5.png");
  brick6 = loadImage("brick6.png");*/

  backgroundI = loadImage("city.png");

}

function setup() {
  createCanvas(displayWidth-120, displayHeight-200);

  ground = createSprite(0, height-height-170, width, height);
  ground.addImage("Background", backgroundI);
  ground.x = ground.width / 2;
  ground.scale = 4;

  cycleR = createSprite(width/2-557, 690, 1, 1);
  cycleR.addAnimation("running", cycleM);
  cycleR.addAnimation("up", cycleU);
  cycleR.scale = 0.06;

  invisibleGround = createSprite(width/2, height, displayWidth-120, 10);
  invisibleGround.visible = false;

  /*cloudsGroup = new Group();
  bricksGroup = new Group();

  score = 0;
  gameOver = createSprite(300, 100, 10, 10);
  gameOver.addImage("gA", gaImage);
  gameOver.scale = 0.7;
  restart = createSprite(300, 140, 10, 10);
  restart.addImage("re", reImage);
  restart.scale = 0.5;

  gameOver.visible = false;
  restart.visible = false;*/

}

function draw() {
  background(backgroundI);

  //if (gameState === PLAY) {
    
    ground.velocityX = -2;

    //score = score + Math.round(getFrameRate() / 60);

    if (keyDown("UP_ARROW"))
    {

      cycleR.y = 600;

    }

    if((keyDown("UP_ARROW")) && (cycleR.y === 600) && (keyDown(32)))
    {

      cycleR.y = 510;

    }

    if((keyDown("DOWN_ARROW")) && (cycleR.y === 510))
    {

      cycleR.y = 600;

    }

    if((keyDown("DOWN_ARROW")) && (cycleR.y === 600) && (keyDown(32)))
    {

      cycleR.y = 690;

    }

    //cycleR.velocityY = cycleR.velocityY + 0.8

    if (ground.x < 70) {
      ground.x = ground.width / 2 + 900;
    }
    spawnBrick1();
    spawnBrick2();
    //console.log(cycleR.y);
    //spawnClouds();
    //spawnbricks();
    /*if (bricksGroup.isTouching(cycleR)) {

      gameState = END;

    }

  } else if (gameState === END) {

    gameOver.visible = true;
    restart.visible = true;
    ground.velocityX = 0;
    cycleR.velocityY = 0;
    bricksGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    cycleR.changeAnimation("co", cycleR_collided);
    bricksGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);

  }
  if(mousePressedOver(restart)) {
    reset();
  }
  textSize(18);
  text("Score: " + score, 500, 50);*/
  cycleR.collide(invisibleGround);
  drawSprites();
}

/*function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600, 120, 40, 10);
    cloud.y = Math.round(random(80, 120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;

    //assign lifetime to the variable
    cloud.lifetime = 200;

    //adjust the depth
    cloud.depth = cycleR.depth;
    cycleR.depth = cycleR.depth + 1;

    //add each cloud to the group
    cloudsGroup.add(cloud);
  }

}

function spawnbricks() {
  if (frameCount % 60 === 0) {
    var brick = createSprite(600, 165, 10, 40);
    brick.velocityX = -4;

    //generate random bricks
    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        brick.addImage(brick1);
        break;
      case 2:
        brick.addImage(brick2);
        break;
      case 3:
        brick.addImage(brick3);
        break;
      case 4:
        brick.addImage(brick4);
        break;
      case 5:
        brick.addImage(brick5);
        break;
      case 6:
        brick.addImage(brick6);
        break;
      default:
        break;
    }

    //assign scale and lifetime to the brick           
    brick.scale = 0.5;
    brick.lifetime = 300;
    //add each brick to the group
    bricksGroup.add(brick);
  }
}

function reset(){
  gameState = PLAY;
  
  gameOver.visible = false;
  restart.visible = false;
  
  bricksGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  cycleR.changeAnimation("running", cycleR_running);
  
  score = 0;
  
}*/

function spawnBrick1()
{

  if (frameCount % 130 === 0) {
    var brick1 = createSprite(width+50, 690, 10, 10);
    brick1.collide(invisibleGround);
    brick1.velocityX = -2;

    //generate random bricks
    var rand1 = Math.round(random(1, 3));
    switch (rand1) {
      case 1:
        brick1.addImage(brick1);
        break;
      case 2:
        brick1.addImage(brick2);
        break;
      case 3:
        brick1.addImage(brick3);
        break;
      /*case 4:
        brick.addImage(brick4);
        break;
      case 5:
        brick.addImage(brick5);
        break;
      case 6:
        brick.addImage(brick6);
        break;*/
      default:
        break;
    }

    //assign scale and lifetime to the brick           
    brick1.scale = 0.1;
    //brick.lifetime = 300;
    //add each brick to the group
    //bricksGroup.add(brick);
  }

}

function spawnBrick2()
{

  if (frameCount % 130 === 0) {
    var brick2 = createSprite(width+50, 600, 10, 10);
    brick2.collide(invisibleGround);
    brick2.velocityX = -2;

    //generate random bricks
    var rand1 = Math.round(random(1, 3));
    switch (rand1) {
      case 1:
        brick2.addImage(brick1);
        break;
      case 2:
        brick2.addImage(brick2);
        break;
      case 3:
        brick2.addImage(brick3);
        break;
      /*case 4:
        brick.addImage(brick4);
        break;
      case 5:
        brick.addImage(brick5);
        break;
      case 6:
        brick.addImage(brick6);
        break;*/
      default:
        break;
    }

    //assign scale and lifetime to the brick           
    brick2.scale = 0.1;
    //brick.lifetime = 300;
    //add each brick to the group
    //bricksGroup.add(brick);
  }

}