function Wall(posX, posY) {

    this.x = posX;
    this.y = posY;
    this.scaleX = 0.85;
    this.scaleY = 0.85;
    this.lineWidth = 1;
}

Wall.prototype.draw = function (context) {


    context.save();
    context.translate(this.x, this.y);
    context.scale(this.scaleX, this.scaleY);
    var img = document.getElementById("wall");
    context.drawImage(img, this.x, this.y);
    context.restore();
};