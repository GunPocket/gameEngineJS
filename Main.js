var ball1;
var ball2;
var ball3;
var rect1;
var rect2;
var rect3;

function start() {
	ball1 = new Entities(400-25, 300-25, 50, 50);
    ball1.image = new image(ball1, 'ball.png');
    ball1.boundsCollison = true;
    ball1.setCollision(true);
    ball1.setVelocity(0.2, 0.2);

    ball2 = new Entities(40, 105, 70, 70);
    ball2.image = new image(ball2, 'glossyBall.png');
    ball2.boundsCollison = true;
    ball2.setCollision(true);
    ball2.setVelocity(-0.2, 0.5);

    ball3 = new Entities(mouseX, mouseY, 20, 20);
    ball3.setCollision(true);
    ball3.image = new image(ball3, 'ball.png');

    rect1 = new Entities(10, 10, 100, 30);
    rect1.setCollision(true);
    rect1.setColor('blue');
    rect1.boundsCollison = true;

    rect2 = new Entities(120, 10, 100, 30);
    rect2.setCollision(true);
    rect2.setColor('red');
    rect2.boundsCollison = true;

    rect3 = new Entities(690, 10, 100, 30);
    rect3.setCollision(true);
    rect3.setColor('green');
    rect3.boundsCollison = true;
    rect3.setVelocity(-0.5, 0);
}

function update(deltaP) {
	ballMovement(ball1, deltaP);
	ballMovement(ball2, deltaP);
	rectMovement(rect3, deltaP);

	ball3.setPosition(mouseX - ball3.width/2, mouseY - ball3.width/2);

	if(ball1.collision.circleCollision(ball2)){
		ball1.setVelocity(-ball1.speedX, -ball1.speedY);
		ball2.setVelocity(-ball2.speedX, -ball2.speedY);
	}

	if(ball3.collision.rectCircleColliding(rect1, 'circle')){
		rect1.setColor('#000088');
	}else{
		rect1.setColor('blue');
	}

	if(rect2.collision.rectCircleColliding(ball3, 'circle')){
		rect2.setColor('#880000');
	}else{
		rect2.setColor('red');
	}

	if(rect3.collision.rectCollision(rect1)){
		rect3.setColor('#002200');
	}else{
		rect3.setColor('green');
	}
	
}



function render() {
	ball1.draw();
	ball2.draw();
	
	rect1.draw();
	rect2.draw();
	rect3.draw();

	ball3.draw();
}

function ballMovement(ball, deltaP) {
    if (ball.boundsCollison) {
        if (ball.x + ball.width > canvasWidth || ball.x < 0) {
            ball.speedX = -ball.speedX;
        }
        if (ball.y + ball.height > canvasHeight || ball.y < 0) {
            ball.speedY = -ball.speedY;
        }
    }
    ball.x += ball.speedX * deltaP;
    ball.y += ball.speedY * deltaP;
}

function rectMovement(rect, deltaP) {
	if (rect.boundsCollison){
		if (rect.x + rect.width > canvasWidth || rect.x < 0) {
            rect.speedX = -rect.speedX;
        }
        if (rect.y + rect.height > canvasHeight || rect.y < 0) {
            rect.speedY = -rect.speedY;
        }
	}
	rect.x += rect3.speedX * deltaP;
    rect.y += rect3.speedY * deltaP;
}