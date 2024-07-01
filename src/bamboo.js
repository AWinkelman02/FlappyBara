const FLOOR_HEIGHT = 48;
const TILE_HEIGHT = 120;

function bambooType(i){
    const rndInt = randomIntFromInterval(1, 6);
    console.log(rndInt)
    switch(rndInt){
        case 1:
            add([
                pos(width()/2 , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("b1"),
                area(),
                //move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(2),
                "pipe",
            ]);
            break;
        case 2:
            add([
                pos(width()/2 , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("b6"),
                area(),
                //move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(2),
                "pipe",
            ]);
            break;
        case 3:
            add([
                pos(width()/2 , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("b6"),
                area(),
                //move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(2),
                "pipe",
            ]);
            break;
        case 4:
            add([
                pos(width()/2 , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("b6"),
                area(),
                //move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(2),
                "pipe",
            ]);
            break;
        case 5:
            add([
                pos(width()/2 , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("b6"),
                area(),
                //move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(2),
                "pipe",
            ]);
            break;
        case 6:
            add([
                pos(width()/2 , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("b6"),
                area(),
                //move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(2),
                "pipe",
            ]);
            break;				
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export { bambooType };