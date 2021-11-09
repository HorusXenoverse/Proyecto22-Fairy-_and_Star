var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyVoice;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
    fairyImg = loadAnimation("images/fairyImage1","images/fairyImage2.png");
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/joyMusic.mp3");
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);
	engine = Engine.create();
	world = engine.world;

	fairyVoice.loop();

	//crea el sprite del hada, y agrega la animación para el hada

	var fairy_options={
		isStatic:true
	}
    fairy=Bodies.rectangle(200,390,200,20,fairy_options);
	fairy.addAnimation(fairyImg);
	fairy.scale = 0.3;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
Engine.update(engine);
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody.true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if(keyDown("RIGHT_ARROW")){
		fairy.velocityX = 3;
	}
	
	if(keyDown("LEFT_ARROW")){
		fairy.velocityX = -3;
	}
}
