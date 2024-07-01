import kaboom from "kaboom"

const FLOOR_HEIGHT = 48;
const TILE_HEIGHT = 120;
const LEAF_OFFSET = 34;
const LAMP_OFFSET = 91
const SPEED = 300;
const OFFSET_OFFSCREEN = 95;

function bambooBaseType(i){
    let rndInt = randomIntFromInterval(1, 6);
    
    switch(Math.ceil(rndInt)){
        case 1:
            add([
                pos(width() + OFFSET_OFFSCREEN , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("b1"),
                area(),
                move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(10),
                "pipe",
            ]);
            break;
        case 2:
            add([
                pos(width() + OFFSET_OFFSCREEN , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("b2"),
                area(),
                move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(10),
                "pipe",
            ]);
            break;
        case 3:
            add([
                pos(width() + OFFSET_OFFSCREEN , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("b3"),
                area(),
                move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(10),
                "pipe",
            ]);
            break;
        case 4:
            add([
                pos(width() + OFFSET_OFFSCREEN , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("b4"),
                area(),
                move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(10),
                "pipe",
            ]);
            break;
        case 5:
            add([
                pos(width() + OFFSET_OFFSCREEN , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("b5"),
                area(),
                move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(10),
                "pipe",
            ]);
            break;
        case 6:
            add([
                pos(width() + OFFSET_OFFSCREEN , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("b6"),
                area(),
                move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(10),
                "pipe",
            ]);
            break;				
    }
}

function bambooLeafType(i){
    const rndInt = randomIntFromInterval(1, 6);

    switch(rndInt){
        case 1:
            break;
        case 2:
            add([
                pos(width() + OFFSET_OFFSCREEN - LEAF_OFFSET , height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("l1"),
                area(),
                move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(9),
                "leaf",
            ]);
            break;
        case 3:
            break;
        case 4:
            add([
                pos(width() + OFFSET_OFFSCREEN - LEAF_OFFSET, height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("l2"),
                area(),
                move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(9),
                "leaf",
            ]);
            break;
        case 5:
            break;
        case 6:
            add([
                pos(width() + OFFSET_OFFSCREEN - LEAF_OFFSET, height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
                sprite("l3"),
                area(),
                move(LEFT, SPEED),
                offscreen({ destroy: true }),
                z(9),
                "leaf",
            ]);
            break;				
    }
}


function createLamp(i){
    const rndInt = randomIntFromInterval(1, 4);
    if(rndInt === 2){
        add([
            pos(width() + OFFSET_OFFSCREEN - LAMP_OFFSET, height() - TILE_HEIGHT * i - FLOOR_HEIGHT ),
            sprite("lamp"),
            area(),
            move(LEFT, SPEED),
            offscreen({ destroy: true }),
            z(9),
            "lamp",
        ])
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export { bambooBaseType, bambooLeafType, createLamp };