var wall = document.getElementById("wall");
function wall_vertical(context, fromX,fromY, toY,scale) {

    context.save();
    while (fromY <= toY) {
        context.drawImage(wall, fromX, fromY, scale, scale); 
        fromY += scale;
    }
    context.restore();
};
function wall_horizontal(context, fromX,fromY, toX,scale) {

    context.save();
    while (fromX <= toX) {
        context.drawImage(wall, fromX, fromY, scale,scale); 
        fromX += scale;
    }
    context.restore();
};
