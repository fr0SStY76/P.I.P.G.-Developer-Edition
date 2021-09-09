function Boss() {
	if(level === 4) {
		if(play === 1) {
			bosslevel.play();
			play = 0;
			move = 1
		}
		boss.visible = true;
		hand1.visible = true;
		hand2.visible = true;
		if(p1.x < boss.x) {
			boss.mirrorX(-1)
		}
		if(p1.x > boss.x) {
			boss.mirrorX(1)
		}
		if(move === 1) {
			hand1.velocityY = 0;
			hand2.velocityY = 0;
			if(p1.x < hand1.x) {
				hand1.velocityX = -4 - difficulty
			}
			if(p1.x > hand1.x) {
				hand1.velocityX = 4 + difficulty
			}
			if(p1.x < hand2.x) {
				hand2.velocityX = -3 - difficulty
			}
			if(p1.x > hand2.x) {
				hand2.velocityX = 3 + difficulty
			}
		}
		if(move === 1) {
			if(frameCount % Math.round(random(60, 240)) === 0) {
				move = 0
			}
		}
		if(move === 0) {
			hand1.addImage(ha);
			hand2.addImage(ha);
			hand1.velocityX = 0;
			hand2.velocityX = 0;
			hand1.velocityY = 7;
			hand2.velocityY = 8;
			if((hand1.collide(pf1) || hand1.collide(pf2) || hand1.collide(pf3))) {
				hand1.y = 100;
				hand2.y = 100;
				move = 1;
				hand1.addImage(hi);
				hand2.addImage(hi)
			}
		}
		if(hand1.isTouching(edge3)) {
			hand1.addImage(hh);
			hand1.x = boss.x;
			hand1.y = boss.y - 50;
			bosslive += -1;
			move = 1
		}
		if(hand2.isTouching(edge3)) {
			hand2.addImage(hh);
			hand2.x = boss.x;
			hand2.y = boss.y - 50;
			bosslive += -1;
			move = 1
		}
		hand1.collide(pf1);
		hand1.collide(pf2);
		hand1.collide(pf3);
		hand2.collide(pf1);
		hand2.collide(pf2);
		hand2.collide(pf3);
		if(bosslive <= 0) {
			move = 3;
			hand1.x = 320;
			hand2.x = 870;
			boss.x = 600;
			if(frameCount % 60 === 0) {
				boss.velocityY = 8
			}
			if(frameCount % 120 === 0) {
				hand1.velocityY = 8;
				hand2.velocityY = 8
			}
			if(frameCount % 240 === 0) {
				gameState = 3;
				boss.visible = false;
				hand1.visible = false;
				hand2.visible = false;
				bosslevel.stop();
				play = 1
			}
		}
		boss.setCollider("rectangle", 0, -25, 200, 500);
		hand1.setCollider("rectangle", 0, 0, 75, 75);
		hand2.setCollider("rectangle", 0, 0, 75, 75)
	} else {
		boss.visible = false;
		hand1.visible = false;
		hand2.visible = false;
		bosslevel.stop();
		move = 3
	}
};