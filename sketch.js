const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;

var bg, bgImg;
var theif, theifImg
var spiderman, spidermanImg;
var tower, towerImg;
var spiderman1
var car
var carImage
var bamImg
var punchSound,sirenSound
var spidermanPunchImg
var mute_btn

function preload() {
  bamImg = loadImage("assets/bam2.png")
  carImage = loadImage("assets/car.png")
  bgImg = loadImage("assets/background2.jpg")
  theifImg = loadImage("assets/theif6.png")
  spidermanImg = loadImage("assets/spiderman2.png")
  towerImg = loadImage("assets/tower.gif")
  punchSound = loadSound("assets/punch.wav")
  sirenSound = loadSound("assets/siren.wav")
  spidermanPunchImg = loadImage("assets/spidermanPunch.png")
}

function setup() {


  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  sirenSound.play()
  sirenSound.setVolume(0.4)

  world = engine.world;
  //adding the background image
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20)
  bg.addImage(bgImg)
  bg.scale = 2
  
  theif = createSprite(width - 150, height - 100, 50, 50);
  theif.addImage(theifImg)
  theif.scale = 0.5

  spiderman = createSprite(75, height - 200, 50, 50);
  spiderman.addImage(spidermanImg)
  spiderman.scale = 0.4
  car = createSprite(200, height - 20, 20, 20)
  car.addImage(carImage)
  car.scale = 0.8

  mute_btn = createImg('mute.png')
  mute_btn.position(450,20);
  mute_btn.size(50,50);
  mute_btn.mouseClicked(mute);
}

function draw() {
  background(0);
  
  //imageMode(CENTER)
  //image(spidermanImg, spiderman2.position.x, spiderman2.position.y, 50, 50)
  Engine.update(engine);


  if (keyDown(RIGHT_ARROW)) {
    spiderman.x += 5
  }
  if (keyDown(UP_ARROW)) {
    spiderman.y -= 5
  }
  if (keyDown(DOWN_ARROW)) {
    spiderman.y += 5
  }
  if (keyDown(LEFT_ARROW)) {
    spiderman.x -= 5
  }
  if(spiderman.isTouching(theif)){
    theif.addImage(bamImg);
    //punchSound.play()
    spiderman.addImage(spidermanPunchImg)
  }

  drawSprites();

}
function mute(){
  if (sirenSound.isPlaying()) {
    sirenSound.stop()
  } else {
    sirenSound.play()
  }
}