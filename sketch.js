var pi1, pi2, pi3;
var ei1, ei2, ei3;
var bg, pf, spf;
var bi, bh, bj, hi, hh, ha;
var menu, bosslevel, endS, levlS;
var walk, jump, die;
var play = 1;
var p1;
var pf1, pf2, pf3, pf4, pf5, pf6, pf7, end;
var o1, o2, o3;
var boss;
var hand1, hand2;
var move = 1;
var bosslive = 12;
var difficulty = 0;
var edge1, edge2, edge3, edge4;
var level = 1;
var lives = 15;
var gameState = 1;
var start;
var endi, enDS;

function preload() {
	pi1 = loadImage("images/p1idle.png");
	ei1 = loadAnimation("images/Ewalk1.png", "images/Ewalk2.png");
	pi3 = loadImage("images/p1jump.png");
	ei2 = loadAnimation("images/barrelroll1.png", "images/barrelroll2.png");
	ei3 = loadImage("images/fireboi.png");
	bg = loadImage("images/background.png");
	pf = loadImage("images/platform.png");
	spf = loadImage("images/smolpf.png");
	bi = loadImage("images/bosswalk2.png");
	bh = loadImage("images/bhandhurt.png");
	bj = loadImage("images/bossjump.png");
	hi = loadImage("images/bhandidle.png");
	hh = loadImage("images/bhandhurt.png");
	ha = loadImage("images/bhandattack.png");
	endi = loadImage("images/END.png");
	walk = loadSound("Walk.wav");
	jump = loadSound("Jump.wav");
	menu = loadSound("Menu.wav");
	die = loadSound("Die.wav");
	bosslevel = loadSound("BossTheme.wav");
	endS = loadSound("End Theme.wav");
	levlS = loadSound("Levels.wav")
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	p1 = createSprite(350, 600, 50, 50);
	p1.addImage(pi3);
	p1.addImage(pi1);
	p1.scale = 0.25;
	pf1 = createSprite(400, 700, 400, 50);
	pf2 = createSprite(700, 550, 400, 50);
	pf3 = createSprite(1100, 400, 400, 50);
	pf4 = createSprite(600, 300, 400, 50);
	pf5 = createSprite(150, 300, 400, 50);
	pf6 = createSprite(0, -500, 400, 50);
	pf7 = createSprite(0, -500, 400, 50);
	end = createSprite(100, 150, 400, 50);
	pf1.addImage(pf);
	pf2.addImage(pf);
	pf3.addImage(pf);
	pf4.addImage(spf);
	pf5.addImage(pf);
	pf6.addImage(pf);
	pf7.addImage(spf);
	end.addImage(pf);
	end.scale = 0.75;
	o1 = createSprite(700, 500, 50, 50);
	o2 = createSprite(1100, 350, 50, 50);
	o3 = createSprite(750, 500, 50, 50);
	o4 = createSprite(600, 250, 50, 50);
	o5 = createSprite(1150, 350, 50, 50);
	o6 = createSprite(750, 100, 50, 50);
	o1.addAnimation("Ewalk", ei1);
	o1.scale = 0.25;
	o1.mirrorX(-1);
	o4.addAnimation("Ewalk", ei1);
	o4.scale = 0.25;
	o5.addAnimation("Ewalk", ei1);
	o5.scale = 0.25;
	o5.mirrorX(-1);
	o2.addAnimation("roll", ei2);
	o2.scale = 0.25;
	o6.addAnimation("roll", ei2);
	o6.scale = 0.25;
	o3.addImage(ei3);
	o3.scale = 0.25;
	boss = createSprite(500, 300, 50, 50);
	boss.addImage(bi);
	boss.scale = 0.75;
	boss.visible = false;
	hand1 = createSprite(300, 300, 50, 50);
	hand2 = createSprite(700, 300, 50, 50);
	hand1.addImage(hi);
	hand1.scale = 0.5;
	hand2.addImage(hi);
	hand2.scale = 0.5;
	hand2.mirrorX(-1);
	hand1.visible = false;
	hand2.visible = false;
	edge1 = createSprite(-200, 500, 400, 1200);
	edge2 = createSprite(1400, 500, 400, 1200);
	edge3 = createSprite(600, 1000, 4000, 400);
	edge4 = createSprite(600, -200, 2000, 400);
	edge1.shapeColor = rgb(200, 122, 86);
	edge2.shapeColor = rgb(200, 122, 86);
	edge3.shapeColor = rgb(0, 0, 86);
	edge4.shapeColor = rgb(200, 122, 86);
	boss.depth = p1.depth - 1;
	start = createSprite(350, 600, 200, 100);
	start.visible = false
	eeee = createSprite(600, 400, 10000, 10000);
	eeee.shapeColor = "black";
	enDS = createSprite(600, 400, 10000, 10000)
	enDS.addImage(endi)
	enDS.scale = 0.5;
	enDS.visible = false;
	eeee.visible = false;
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(bg);
	camera.position.x = p1.x;
	camera.position.y = p1.y;
	drawSprites();
	if(gameState === 1) {
		bosslive = 12 + difficulty;
		textSize(30);
		fill("black");
		text("Press Start", 270, 610);
		textSize(35);
		text("Pretty Inaccurate Pirate Game", 150, 510);
		textSize(20);
		text("W to jump A and D to move Space to sprint", 200, 550);
		text("(C) DarwinX3052 2021", 800, 900);
		text("TM", 600, 490);
		
		boss.x = 600;
		hand1.x = 300;
		hand2.x = 800;
		boss.y = 300;
		hand1.y = 300;
		hand2.y = 300;
		lives = 15;
		level = 1;
		move = 1;
		boss.velocityY = 0;
		hand1.y = 200;
		hand2.y = 200;
		enDS.visible = false;
		eeee.visible = false;
		p1.velocityY = 0;
		o1.velocityY = 0;
		o2.velocityY = 0;
		o3.velocityY = 0;
		o4.velocityY = 0;
		o5.velocityY = 0;
		o6.velocityY = 0;
		o1.velocityX = 0;
		o2.velocityX = 0;
		o3.velocityX = 0;
		o4.velocityX = 0;
		o5.velocityX = 0;
		o6.velocityX = 0;
		if(play === 1) {
			menu.play();
			play = 0
		}
		if(mousePressedOver(start)) {
			menu.stop();
			levlS.stop();
			endS.stop();
			gameState = 2;
			level = 1;
			play = 1
			lives = 15 + difficulty;
		}
	}
	if(gameState === 2) {
		if(level < 4) {
			if(play === 1) {
				levlS.play();
				play = 0
			}
		}
		fill("black");
		textSize(20);
		text("Lives: " + lives, 300, 450);
		text("Level: " + level, 300, 475);
		Player();
		Enemy();
		Boss()

		if(lives < 0) {
			gameState = 4;
			play = 1;
			if(play === 1) {
				die.play()
			}
				p1.velocityY = 0;
				o1.velocityY = 0;
				o2.velocityY = 0;
				o3.velocityY = 0;
				o4.velocityY = 0;
				o5.velocityY = 0;
				o6.velocityY = 0;
				o1.velocityX = 0;
				o2.velocityX = 0;
				o3.velocityX = 0;
				o4.velocityX = 0;
				o5.velocityX = 0;
				o6.velocityX = 0;
				pf1.x = 400;
				pf1.y = 700;
				pf2.x = 700;
				pf2.y = 550;
				pf3.x = 1100;
				pf3.y = 400;
				pf4.x = 600;
				pf4.y = 300;
				pf5.x = 150;
				pf5.y = 300;
				pf6.x = 0;
				pf6.y = -500;
				pf7.x = 0;
				pf7.y = -500;
				end.x = 100;
				end.y = 150;
				p1.x = 350;
				p1.y = 500;
				o1.x = 700;
				o1.y = 500;
				o2.x = 1100;
				o2.y = 350;
				o3.x = 750;
				o3.y = 500;
				o4.x = 600;
				o4.y = 250;
				o5.x = 1150;
				o5.y = 350;
				o6.x = 750;
				o6.y = 100
		}



	}
	if(gameState === 3) {
		if(play === 1) {
			endS.play();
			play = 0
		}
		lives = 5;
		move = 1;
		p1.x = 600;
		p1.y = 400;
		p1.velocityY = 0;
		o1.velocityY = 0;
		o2.velocityY = 0;
		o3.velocityY = 0;
		o4.velocityY = 0;
		o5.velocityY = 0;
		o6.velocityY = 0;
		o1.velocityX = 0;
		o2.velocityX = 0;
		o3.velocityX = 0;
		o4.velocityX = 0;
		o5.velocityX = 0;
		o6.velocityX = 0;
		enDS.visible = true;
	eeee.visible = true;
		if(keyWentDown("enter")) {
			gameState = 1;
			difficulty += 2;
			level = 1;
			menu.stop();
			endS.stop();
			if(level === 1) {
				play = 1;
				p1.x = 350;
				p1.y = 500;
				o1.x = 700;
				o1.y = 500;
				o2.x = 1100;
				o2.y = 350;
				o3.x = 750;
				o3.y = 500;
				o4.x = 600;
				o4.y = 250;
				o5.x = 1150;
				o5.y = 350;
				o6.x = 750;
				o6.y = 100;
				pf1.x = 400;
				pf1.y = 700;
				pf2.x = 700;
				pf2.y = 550;
				pf3.x = 1100;
				pf3.y = 400;
				pf4.x = 600;
				pf4.y = 300;
				pf5.x = 150;
				pf5.y = 300;
				pf6.x = 0;
				pf6.y = -500;
				pf7.x = 0;
				pf7.y = -500;
				end.x = 100;
				end.y = 150
			}
		}
	}
	if (gameState === 4){
		fill("black");
		textSize(20)
		text ("You Died Press Enter To Play Again", 100, 600)
			if(keyWentDown("enter")) {
				gameState = 1;
			}
	}
};