function Player() {
	if(keyDown("a")) {
		if(keyDown("space")) {
			p1.x += -7 - difficulty;
			p1.mirrorX(-1)
		} else {
			p1.x += -5 - difficulty;
			p1.mirrorX(-1)
		}
	}
	if(keyDown("d")) {
		if(keyDown("space")) {
			p1.x += 7 + difficulty;
			p1.mirrorX(1)
		} else {
			p1.x += 5 + difficulty;
			p1.mirrorX(1)
		}
	}
	if(keyDown("a")) {
		if(frameCount % 10 === 0) {
			walk.play()
		}
	}
	if(keyDown("d")) {
		if(frameCount % 10 === 0) {
			walk.play()
		}
	}
	if(keyDown("w") && (p1.collide(pf1) || p1.collide(pf2) || p1.collide(pf3) || p1.collide(pf4) || p1.collide(pf5) || p1.collide(pf6) || p1.collide(pf7))) {
		p1.velocityY = -15;
		p1.addImage(pi3)
	}
	if(!keyDown("w")) {
		p1.addImage(pi1)
	}
	if(keyWentDown("w")) {
		jump.play()
	}
	p1.velocityY += 0.8;
	p1.collide(pf1);
	p1.collide(pf2);
	p1.collide(pf3);
	p1.collide(pf4);
	p1.collide(pf5);
	p1.collide(pf6);
	p1.collide(pf7);
	p1.collide(edge1);
	p1.collide(edge2);
	p1.collide(edge4);
	p1.collide(edge3);
	if(p1.isTouching(end)) {
		level = level + 1;
		levlS.stop();
		if(level >= 5) {
			level = 1
		}
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
		if(level === 2) {
			play = 1;
			p1.x = 100;
			p1.y = 100;
			o1.x = 50;
			o1.y = 450;
			o2.x = 1100;
			o2.y = 350;
			o3.x = 1100;
			o3.y = 400;
			o4.x = 500;
			o4.y = 700;
			o5.x = 1150;
			o5.y = 350;
			o6.x = 900;
			o6.y = 100;
			pf1.x = 250;
			pf1.y = 200;
			pf2.x = 600;
			pf2.y = 300;
			pf3.x = 1100;
			pf3.y = 500;
			pf4.x = 900;
			pf4.y = 700;
			pf5.x = 400;
			pf5.y = 700;
			pf6.x = 0;
			pf6.y = -500;
			pf7.x = 0;
			pf7.y = -500;
			end.x = -25;
			end.y = 500
		}
		if(level === 3) {
			play = 1;
			p1.x = 600;
			p1.y = 560;
			o1.x = 1150;
			o1.y = 450;
			o2.x = 1100;
			o2.y = 350;
			o3.x = 750;
			o3.y = 500;
			o4.x = 600;
			o4.y = 800;
			o5.x = 1200;
			o5.y = 200;
			o6.x = 750;
			o6.y = 100;
			pf1.x = 600;
			pf1.y = 700;
			pf2.x = 150;
			pf2.y = 500;
			pf3.x = 950;
			pf3.y = 500;
			pf4.x = 300;
			pf4.y = 200;
			pf5.x = 700;
			pf5.y = 200;
			pf6.x = 50;
			pf6.y = 350;
			pf7.x = 0;
			pf7.y = -500;
			end.x = 1100;
			end.y = 200
		}
		if(level === 4) {
			play = 1;
			p1.x = 600;
			p1.y = 450;
			o1.x = -200;
			o1.y = -500;
			o2.x = -200;
			o2.y = -500;
			o3.x = -200;
			o3.y = -500;
			o4.x = -200;
			o4.y = -500;
			o5.x = -200;
			o5.y = -500;
			o6.x = -200;
			o6.y = -500;
			pf1.x = 600;
			pf1.y = 500;
			pf2.x = 50;
			pf2.y = 500;
			pf3.x = 1150;
			pf3.y = 500;
			pf4.x = 0;
			pf4.y = -500;
			pf5.x = 0;
			pf5.y = -500;
			pf6.x = 0;
			pf6.y = -500;
			pf7.x = 0;
			pf7.y = -500;
			end.x = 0;
			end.y = -500
		}
	}
	if((p1.isTouching(o1) || p1.isTouching(o2) || p1.isTouching(o3) || p1.isTouching(o4) || p1.isTouching(o5) || p1.isTouching(o6) || p1.collide(edge3))) {
		lives = lives - 1;
		levlS.stop();
		if(level === 1) {
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
		if(level === 2) {
			p1.x = 100;
			p1.y = 100;
			o1.x = 50;
			o1.y = 450;
			o2.x = 1100;
			o2.y = 350;
			o3.x = 1100;
			o3.y = 400;
			o4.x = 500;
			o4.y = 700;
			o5.x = 1150;
			o5.y = 350;
			o6.x = 900;
			o6.y = 100
		}
		if(level === 3) {
			p1.x = 600;
			p1.y = 560;
			o1.x = 1150;
			o1.y = 450;
			o2.x = 1100;
			o2.y = 350;
			o3.x = 750;
			o3.y = 500;
			o4.x = 600;
			o4.y = 800;
			o5.x = 1200;
			o5.y = 200;
			o6.x = 750;
			o6.y = 100
		}
		if(level === 4) {
			p1.x = 600;
			p1.y = 450;
			hand1.x = 300;
			hand1.y = 300;
			hand2.x = 800;
			hand2.y = 300
		}
	}
	if(level === 4 && (p1.isTouching(hand1) || p1.isTouching(hand2))) {
		lives = lives - 1;
		levlS.stop();
		
			p1.x = 600;
			p1.y = 450;
			hand1.x = 300;
			hand1.y = 300;
			hand2.x = 800;
			hand2.y = 30;
	}
	if(keyDown("enter")) {
		if(keyDown("n")) {
			if(keyWentDown("esc")) {
				levlS.stop();
				level = level + 1;
				if(level >= 5) {
					level = 1
				}
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
				if(level === 2) {
					play = 1;
					p1.x = 100;
					p1.y = 100;
					o1.x = 50;
					o1.y = 450;
					o2.x = 1100;
					o2.y = 350;
					o3.x = 1100;
					o3.y = 400;
					o4.x = 500;
					o4.y = 700;
					o5.x = 1150;
					o5.y = 350;
					o6.x = 900;
					o6.y = 100;
					pf1.x = 250;
					pf1.y = 200;
					pf2.x = 600;
					pf2.y = 300;
					pf3.x = 1100;
					pf3.y = 500;
					pf4.x = 900;
					pf4.y = 700;
					pf5.x = 400;
					pf5.y = 700;
					pf6.x = 0;
					pf6.y = -500;
					pf7.x = 0;
					pf7.y = -500;
					end.x = -25;
					end.y = 500
				}
				if(level === 3) {
					play = 1;
					p1.x = 600;
					p1.y = 560;
					o1.x = 1150;
					o1.y = 450;
					o2.x = 1100;
					o2.y = 350;
					o3.x = 750;
					o3.y = 500;
					o4.x = 600;
					o4.y = 800;
					o5.x = 1200;
					o5.y = 200;
					o6.x = 750;
					o6.y = 100;
					pf1.x = 600;
					pf1.y = 700;
					pf2.x = 150;
					pf2.y = 500;
					pf3.x = 950;
					pf3.y = 500;
					pf4.x = 300;
					pf4.y = 200;
					pf5.x = 700;
					pf5.y = 200;
					pf6.x = 50;
					pf6.y = 350;
					pf7.x = 0;
					pf7.y = -500;
					end.x = 1100;
					end.y = 200
				}
				if(level === 4) {
					play = 1;
					p1.x = 600;
					p1.y = 450;
					o1.x = -200;
					o1.y = -500;
					o2.x = -200;
					o2.y = -500;
					o3.x = -200;
					o3.y = -500;
					o4.x = -200;
					o4.y = -500;
					o5.x = -200;
					o5.y = -500;
					o6.x = -200;
					o6.y = -500;
					pf1.x = 600;
					pf1.y = 500;
					pf2.x = 50;
					pf2.y = 500;
					pf3.x = 1150;
					pf3.y = 500;
					pf4.x = 0;
					pf4.y = -500;
					pf5.x = 0;
					pf5.y = -500;
					pf6.x = 0;
					pf6.y = -500;
					pf7.x = 0;
					pf7.y = -500;
					end.x = 0;
					end.y = -500
				}
			}
		}
	}
};