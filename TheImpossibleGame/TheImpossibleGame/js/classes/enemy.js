// Depending on the type of the enemy , value can represent: 
// distance ( for vertical/horizontal/diagonal enemies)
// radius ( for circle enemies)  PS: Not implemented yet
// length of a side (for square enemies)
function Enemy(id, type, startX, startY, value, speed, height, width) {
    this.img = document.getElementById(id);
    this.type = type;
    this.value = value;
    this.x = startX;
    this.y = startY;
    this.speed = speed;
    this.startX = startX;
    this.startY = startY;
    this.height = height;
    this.width = width;
    
    if (type == "vertical")
        this.endY = this.startY + this.value;
    if (type == "horizontal")
        this.endX = this.startX + this.value;
    if (type == "diagonal" || type == "square" || type == "diamond") {
        this.endX = this.startX + this.value;
        this.endY = this.startY + this.value;
        this.side = 1; // it only counts for type == "square" || type == "diamond"
    }
    if (type == "sinus") {
        this.sector = 1;
    }
}

Enemy.prototype.move = function (player) {

    if (this.type == "horizontal") {

        if (this.startX <= this.endX)
            this.direction = 1;
        else
            this.direction = -1;
        this.x += this.speed * this.direction;
        if (this.x == this.startX || this.x == this.endX)
            this.speed *= (-1);
    }

    if (this.type == "vertical") {

        if (this.startY <= this.endY)
            this.direction = 1;
        else
            this.direction = -1;
        this.y += this.speed * this.direction;
        if (this.y == this.startY || this.y == this.endY)
            this.speed *= (-1);
    }

    if (this.type == "diagonal") {

        if (this.startX <= this.endX)
            this.direction = 1;
        else
            this.direction = -1;
        this.x += this.speed * this.direction;
        this.y += this.speed * this.direction;
        if (this.x == this.startX || this.x == this.endX)
            this.speed *= (-1);
    }

    if (this.type == "square") {

        if (this.side == 1)
            this.x += this.speed;
        if (this.side == 2)
            this.y += this.speed;
        if (this.side == 3)
            this.x -= this.speed;
        if (this.side == 4)
            this.y -= this.speed;

        if (this.x == this.endX && this.y == this.startY)
            this.side = 2;
        if (this.x == this.endX && this.y == this.endY)
            this.side = 3;
        if (this.x == this.startX && this.y == this.endY)
            this.side = 4;
        if (this.x == this.startX && this.y == this.startY)
            this.side = 1;

    }
    // diamond is not ready. Do not use!
    if (this.type == "diamond") {
        if (this.side == 1) {
            this.x += this.speed;
            this.y += this.speed;
        }
        if (this.side == 2) {
            this.x -= this.speed;
            this.y += this.speed;
        }
        if (this.side == 3) {
            this.x -= this.speed;
            this.y -= this.speed;
        }
        if (this.side == 4) {
            this.x += this.speed;
            this.y -= this.speed;
        }
        if (this.x == this.startX + this.value/2 && this.y == this.startY + this.value/2)
            this.side = 2;
        if (this.x == this.endX && this.y == this.endY)
            this.side = 3;
        if (this.x == this.startX && this.y == this.endY)
            this.side = 4;
        if (this.x == this.startX && this.y == this.startY)
            this.side = 1;
    }
    //Not implemented yet
    if (this.type == "sinus") {
        this.x += 1;
        this.y = this.y + Math.sin(2 * Math.PI * (this.x / 50)) * 10 ;


    }
}

Enemy.prototype.draw = function (context) {
    context.save();
    context.drawImage(this.img, this.x, this.y, this.width, this.height); 
    			// 20 is the Scale of the image.
    			
    if(!(player.x + player.width < this.x ||
             this.x + this.width < player.x ||
             player.y + player.height < this.y ||
             this.y + this.height  < player.y))
    	{
    		playerDies();
    	}         
             
    context.restore();
};

function playerDies(){
	player.x = 40;
	player.y = 40;
}
