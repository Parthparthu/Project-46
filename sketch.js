var cycleR, cycleM, cycleU;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
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

  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  obstacle3 = loadImage("obstacle3.png");
  obstacle4 = loadImage("obstacle4.png");
  obstacle5 = loadImage("obstacle5.png");
  obstacle6 = loadImage("obstacle6.png");

  backgroundI = loadImage("city.png");

}

function setup() {
  createCanvas(displayWidth-120, displayHeight-200);

  ground = createSprite(0, height-height-170, width, height);
  ground.addImage("Background", backgroundI);
  ground.x = ground.width / 2;
  ground.scale = 4;

  cycleR = createSprite(width/2-550, height/2+200, 1, 1);
  cycleR.addAnimation("running", cycleM);
  cycleR.addAnimation("up", cycleU);
  cycleR.scale = 0.1;

  invisibleGround = createSprite(width/2, height, displayWidth-120, 10);
  invisibleGround.visible = false;

  /*cloudsGroup = new Group();
  obstaclesGroup = new Group();

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

    if ((keyDown("space")) && (cycleR.y >= 161)) {
      cycleR.velocityY = -12;
    }

    cycleR.velocityY = cycleR.velocityY + 0.8

    if (ground.x < 70) {
      ground.x = ground.width / 2 + 900;
    }
    //spawnClouds();
    //spawnObstacles();
    /*if (obstaclesGroup.isTouching(cycleR)) {

      gameState = END;

    }

  } else if (gameState === END) {

    gameOver.visible = true;
    restart.visible = true;
    ground.velocityX = 0;
    cycleR.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    cloudsGroup.setVelocityXEach(0);
    cycleR.changeAnimation("co", cycleR_collided);
    obstaclesGroup.setLifetimeEach(-1);
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

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600, 165, 10, 40);
    obstacle.velocityX = -4;

    //generate random obstacles
    var rand = Math.round(random(1, 6));
    switch (rand) {
      case 1:
        obstacle.addImage(obstacle1);
        break;
      case 2:
        obstacle.addImage(obstacle2);
        break;
      case 3:
        obstacle.addImage(obstacle3);
        break;
      case 4:
        obstacle.addImage(obstacle4);
        break;
      case 5:
        obstacle.addImage(obstacle5);
        break;
      case 6:
        obstacle.addImage(obstacle6);
        break;
      default:
        break;
    }

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function reset(){
  gameState = PLAY;
  
  gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  cloudsGroup.destroyEach();
  
  cycleR.changeAnimation("running", cycleR_running);
  
  score = 0;
  
}*/