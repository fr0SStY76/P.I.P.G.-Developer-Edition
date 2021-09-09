function Enemy() {
	o1.velocityX = -2 - difficulty;
	o1.velocityY += 0.8;
	if(p1.y + 10 < o4.y && (o4.collide(pf1) || o4.collide(pf2) || o4.collide(pf3) || o4.collide(pf4) || o4.collide(pf5) || o4.collide(pf6) || o4.collide(pf7) || o4.collide(end))) {
		o4.velocityY = -5;
	}
	o4.velocityY += 0.8;
	o5.velocityX = -2 - difficulty;
	o5.velocityY += 0.8;
	o2.velocityX = -6 - difficulty;
	o2.velocityY += 0.8;
	o6.velocityY += 0.1;
	o3.velocityY += 0.8;
	if(p1.x < o3.x) {
		o3.velocityX = -1.5 - difficulty;
		o3.mirrorX(-1)
	}
	if(p1.x > o3.x) {
		o3.velocityX = 1.5 + difficulty;
		o3.mirrorX(1)
	}
	if(p1.y + 10 < o3.y && (o3.collide(pf1) || o3.collide(pf2) || o3.collide(pf3) || o3.collide(pf4) || o3.collide(pf5) || o3.collide(pf6) || o3.collide(pf7) || o3.collide(end))) {
		o3.velocityY = -12
	}
	if(level < 4) {
		if(o1.collide(edge3)) {
			o1.y = 1200
		}
		if(o2.collide(edge3)) {
			o2.x = 1100;
			o2.y = 350
		}
		if(o3.collide(edge3)) {
			o3.y = 1200
		}
		if(o4.collide(edge3)) {
			o4.y = 1200
		}
		if(o6.collide(edge3)) {
			o6.x = 750;
			o6.y = 100
		}
		if(o5.collide(edge3)) {
			o5.y = 1200
		}
	}
	o1.collide(pf1);
	o1.collide(pf2);
	o1.collide(pf3);
	o1.collide(pf4);
	o1.collide(pf5);
	o1.collide(pf6);
	o1.collide(pf7);
	o1.collide(end);
	o2.collide(pf1);
	o2.collide(pf2);
	o2.collide(pf3);
	o2.collide(pf4);
	o2.collide(pf5);
	o2.collide(pf6);
	o2.collide(pf7);
	o2.collide(end);
	o3.collide(pf1);
	o3.collide(pf2);
	o3.collide(pf3);
	o3.collide(pf4);
	o3.collide(pf5);
	o3.collide(pf6);
	o3.collide(pf7);
	o3.collide(end);
	o4.collide(pf1);
	o4.collide(pf2);
	o4.collide(pf3);
	o4.collide(pf4);
	o4.collide(pf5);
	o4.collide(pf6);
	o4.collide(pf7);
	o4.collide(end);
	o5.collide(pf1);
	o5.collide(pf2);
	o5.collide(pf3);
	o5.collide(pf4);
	o5.collide(pf5);
	o5.collide(pf6);
	o5.collide(pf7);
	o5.collide(end);
	o1.bounceOff(edge1);
	o1.bounceOff(edge2);
	o1.bounceOff(edge4);
	o2.bounceOff(edge1);
	o2.bounceOff(edge2);
	o2.bounceOff(edge4);
	o3.bounceOff(edge1);
	o3.bounceOff(edge2);
	o3.bounceOff(edge4);
	o4.bounceOff(edge1);
	o4.bounceOff(edge2);
	o4.bounceOff(edge4);
	o5.bounceOff(edge1);
	o5.bounceOff(edge2);
	o5.bounceOff(edge4);
	o6.bounceOff(edge1);
	o6.bounceOff(edge2);
	o6.bounceOff(edge4);
	o1.collide(edge3);
	o2.collide(edge3);
	o3.collide(edge3)
};