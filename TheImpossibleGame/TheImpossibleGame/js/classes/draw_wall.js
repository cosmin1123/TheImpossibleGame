var wall = document.getElementById("wall");
var walls_vertical = new Array;
var walls_horizontal = new Array;
var index_v = 0;
var index_h = 0;
function wall_vertical(context, fromX, fromY, toY, scale, player) {
    
    context.save();
    while (fromY <= toY) {
        context.drawImage(wall, fromX, fromY, scale, scale);
        walls_vertical[index_v++] = fromX;
        walls_vertical[index_v++] = fromY;
        walls_vertical[index_v++] = scale;
        fromY += scale;
    }
    context.restore();
};
function wall_horizontal(context, fromX,fromY, toX,scale, player) {

    context.save();
    while (fromX <= toX) {
        context.drawImage(wall, fromX, fromY, scale, scale);
        walls_horizontal[index_h++] = fromX;
        walls_horizontal[index_h++] = fromY;
        walls_horizontal[index_h++] = scale;
        fromX += scale;
    }
    context.restore();
};
