let x, y, h, a;
let s = 0;
let mic;
var shot;
var score;
let screen = 0;
let timerValue = 60;
let soundMenu, soundGame, soundHit;

//let fruit = [];

function preload(){
  imgStart = loadImage("Images/GameStart.png");
  imgGame = loadImage("Images/GameBG.png");
  imgEnd = loadImage("Images/GameEnd.png");
  imgA = loadImage("Images/Apple.png");
  imgADeath = loadImage("Images/AppleDeath.png");
  imgB = loadImage("Images/Banana.png");
  imgBDeath = loadImage("Images/BananaDeath.png");
  imgG = loadImage("Images/Grape.png");
  imgGDeath = loadImage("Images/GrapeDeath.png");
  imgW = loadImage("Images/Watermelon.png");
  imgWDeath = loadImage("Images/WatermelonDeath.png");
  imgP = loadImage("Images/Pineapple.png");
  imgPDeath = loadImage("Images/PineappleDeath.png");
  
  soundMenu = loadSound("Sounds/Menu.mp3");
  soundGame = loadSound("Sounds/Game.mp3");
  soundHit = loadSound("Sounds/Splat.mp3");
}

function setup() {
  createCanvas(1200, 800);
  setInterval(timeIt, 1000);
  fill(0);
  x = 600
  y = 400
  mic = new p5.AudioIn();
  mic.start();
  angleMode(DEGREES);
  //target movement
  pos = createVector(random(0,1100), -250); //position
  gravity = createVector(0, 0.1);
  vel = createVector(2.5, 3); //velocity
  
  soundMenu.setVolume(0.07);
  soundGame.setVolume(0.15);
  soundHit.setVolume(0.2);
  
}

function draw() {
  
   if(screen == 0){
    start();
  }else if(screen == 1){
    game();
  }else if(screen == 2){
    game2();
  }else if(screen == 3){
    game3();
  }else if(screen == 4){
    game4();
  }else if(screen == 5){
    game5();
  }else if(screen == 6){
    end();
  }
  
  
  
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}  

function mousePressed(){
	if(screen==0){
  	screen=1
  } else if (screen==6){
    screen=0
  }
}