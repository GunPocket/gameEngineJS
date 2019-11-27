class image {

    constructor(entities, sprite) {
        this.sprite = sprite;
        this.entities = entities;
        this.image = new Image();
        this.image.src = 'assets/' + this.sprite;
        this.entities.self.appendChild(this.image);
    }
    draw() {
        canvasContext.drawImage(this.image, this.entities.x, this.entities.y, this.entities.width, this.entities.height);
    }
}