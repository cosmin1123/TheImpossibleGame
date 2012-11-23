function Wall(size, posX, posY) {
    if (size === undefined) { size = 50; }

    this.x = posX;
    this.y = posY;
    this.width = size;
    this.height = size;
    this.scaleX = 1;
    this.scaleY = 1;
    this.lineWidth = 1;
}

Wall.prototype.draw = function (context) {


    context.save();
    context.translate(this.x, this.y);
    context.scale(this.scaleX, this.scaleY);

    var img = document.getElementById("wall");
    img.height = this.height;
    img.width = this.width;

    context.drawImage(img, this.x, this.y);

    context.restore();
};