class Entities {

    constructor(x, y, width, height) {
        this.self = canvas.appendChild(document.createElement("div"));
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = 'white';
        this.image = null;
        this.boundsCollison = false;
        this.speedX;
        this.speedY;
        this.haveCollision = false;
    }

    draw() {
        if (this.image == null) {
            colorRect(this.x, this.y, this.width, this.height, this.color);
        }

        if (this.image != null) {
            this.image.draw();
        }

        if(this.haveCollision == true){
            this.collision.update(this.x, this.y, this.width, this.height);
        }
    }

    setCollision(col) {
        this.haveCollision = col;
        if(this.haveCollision == true){
            this.collision = new Collision(this.x, this.y, this.width, this.height, this.haveCollision);
        }
    }

    setColor(color) {
        this.color = color;
    }

    setSize(width, height) {
        this.width = width;
        this.height = height;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    setVelocity(speedX, speedY) {
        this.speedX = speedX;
        this.speedY = speedY;
    }
}