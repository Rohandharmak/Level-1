var ballimage, question1level5, question2level5, question3level5;
var score = 0;
var gameState;
var ting, buzzer;
var level1completeimage

function preload() {
  ballimage = loadImage("ball.png");
  question1level5 = loadImage("1.1.png");
  question2level5 = loadImage("1.2.png");
  question3level5 = loadImage("1.3.png");
  ting = loadSound("ting.mp3");
  buzzer = loadSound("buzzer.mp3");
  level1completeimage=loadImage("level1.png");
}

function setup() {
  createCanvas(600, 600);

  level5question1 = createSprite(300, 300);
  level5question1.addImage("51", question1level5);
  level5question1.depth = 3;

  ball = createSprite(300, 520, 50, 50);
  ball.addImage("ball", ballimage);
  ball.scale = 0.2;
  ball.velocityY = 0;
  ball.velocityX = 0;


  topleft1 = createSprite(105, 310, 60, 60);
  topleft1.visible = false;

  bottomleft1 = createSprite(105, 400, 60, 60);
  bottomleft1.visible = false;

  topright1 = createSprite(510, 305, 60, 60);
  topright1.visible = false;

  bottomright1 = createSprite(490, 385, 60, 60);
  bottomright1.visible = false;

  middle1 = createSprite(305, 350, 60, 60);
  middle1.visible = false;


  level5question2 = createSprite(300, 300);
  level5question2.addImage("52", question2level5);
  level5question2.depth = 2;

  level5question3 = createSprite(300, 300);
  level5question3.addImage("53", question3level5);
  level5question3.depth = 1;
}

function draw() {

  if (gameState === "level2") {
    level2();
  }
  if (gameState === "level3") {
    level3();
  }


  if (mousePressedOver(middle1)) {
    ball.velocityY = -3;

  }
  if (ball.isTouching(middle1)) {
    score = score + 1;
    ball.collide(middle1);
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.x = 300;
    ball.y = 520;
    ting.play();
    level5question1.destroy();
    gameState = "level2";
  }

  if (mousePressedOver(bottomright1)) {
    ball.velocityY = -3;
    ball.velocityX = 7;
  }
  if (ball.isTouching(bottomright1)) {
    score = score - 1;
    ball.collide(bottomright1);
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.x = 300;
    ball.y = 520;
    buzzer.play();
  }
  if (mousePressedOver(topright1)) {
    ball.velocityY = -4;
    ball.velocityX = 2.9;

  }
  if (ball.isTouching(topright1)) {
    score = score - 1;
    ball.collide(topright1);
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.x = 300;
    ball.y = 520;
    buzzer.play();
  }
  if (mousePressedOver(bottomleft1)) {
    ball.velocityY = -4;
    ball.velocityX = -5;
  }
  if (ball.isTouching(bottomleft1)) {
    score = score - 1;
    ball.collide(bottomleft1);
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.x = 300;
    ball.y = 520;
    buzzer.play();
  }
  if (mousePressedOver(topleft1)) {
    ball.velocityY = -8;
    ball.velocityX = -6;

  }
  if (ball.isTouching(topleft1)) {
    score = score - 1;
    ball.collide(topleft1);
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.x = 300;
    ball.y = 520;
    buzzer.play();
  }



  drawSprites();
  stroke("yellow");
  textSize(20);
  fill("yellow");
  text("Score:" + score, 490, 20);


}

function level2() {

  if (mousePressedOver(topleft1)) {
    ball.velocityY = -8;
    ball.velocityX = -6;

  }
  if (ball.isTouching(topleft1)) {
    score = score + 1;
    ball.collide(topleft1);
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.x = 300;
    ball.y = 520;
    ting.play();
    level5question2.destroy();
    gameState = "level3";
  }

  if (mousePressedOver(middle1)) {
    ball.velocityY = -3;

  }
  if (ball.isTouching(middle1)) {
    score = score - 1;
    ball.collide(middle1);
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.x = 300;
    ball.y = 520;
    buzzer.play();
  }
}

function level3() {

  if (mousePressedOver(topleft1)) {
    ball.velocityY = -8;
    ball.velocityX = -6;


  }
  if (ball.isTouching(topleft1)) {
    score = score - 1;
    ball.collide(topleft1);
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.x = 300;
    ball.y = 520;
    buzzer.play();

  }
  if (mousePressedOver(middle1)) {
    ball.velocityY = -3;

  }
  if (ball.isTouching(middle1)) {
    score = score + 1;
    ball.collide(middle1);
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.x = 300;
    ball.y = 520;
    ting.play();
    middle1.x = 5000;
    topleft1.x = 5000;
    bottomleft1.x = 5000;
    bottomright1.x = 5000;
    topright1.x = 5000;
    var level1=createSprite(300,40,100,100);
    level1.addImage(level1completeimage)


  }
}