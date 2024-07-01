import kaboom from "kaboom"
import { bambooBaseType, bambooLeafType, createLamp } from "./bamboo.js"

const FLOOR_HEIGHT = 48;
const TILE_HEIGHT = 120;
const CEILING = -60;
const SPEED = 300;
const OFFSET_OFFSCREEN = 95;

kaboom()

setBackground(102, 207, 46)

loadSprite("grass", "assets/grass block.png");
loadSprite("grass trim", "assets/grass trim.png");
loadSprite("background", "assets/background.png");
loadSprite("lamp", "assets/lamp.png");;

loadSpriteAtlas("sprites/capybara.png", {
	'capy': {
		x: 0,
		y: 0,
		width: 486,
		height: 76,
		sliceX: 6,
		anims: {
			'fly': { from: 0, to: 5, speed: 23} //23 13
		},
	}
});

loadSpriteAtlas("assets/bamboo.png", {
	'b1': {
		x: 0,
		y: 0,
		width: 45,
		height: 120,
		sliceX: 1,
	},
	'b2': {
		x: 45,
		y: 0,
		width: 45,
		height: 120,
		sliceX: 1,
	},
	'b3': {
		x: 90,
		y: 0,
		width: 45,
		height: 120,
		sliceX: 1,
	},
	'b4': {
		x: 135,
		y: 0,
		width: 45,
		height: 120,
		sliceX: 1,
	},
	'b5': {
		x: 180,
		y: 0,
		width: 45,
		height: 120,
		sliceX: 1,
	},
	'b6': {
		x: 225,
		y: 0,
		width: 45,
		height: 120,
		sliceX: 1,
	},
	
});

loadSpriteAtlas("assets/bamboo leaves.png", {
	'l1': {
		x: 0,
		y: 0,
		width: 113,
		height: 120,
		sliceX: 1,
	},
	'l2': {
		x: 113,
		y: 0,
		width: 113,
		height: 120,
		sliceX: 1,
	},
	'l3': {
		x: 226,
		y: 0,
		width: 113,
		height: 120,
		sliceX: 1,
	},
});

// define gravity
setGravity(3200)

scene("start", () => {
	onUpdate(() => setCursor("default"));

	function addButton(txt, f){
		const btn = add([
			rect(240, 80, { radius: 8 }),
			pos(width() / 2, height() / 2),
			area(),
			scale(1),
			anchor("center"),
			outline(4),
		]);

		btn.add([
			text(txt),
			anchor("center"),
			color(0, 0, 0),
		]);

		btn.onHoverUpdate(() => {
			const t = time() * 10
			btn.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
			btn.scale = vec2(1.2)
			setCursor("pointer")
		});

		btn.onHoverEnd(() => {
			btn.scale = vec2(1)
			btn.color = rgb()
		});

		btn.onClick(f)

		return btn
	};

	addButton("Start", () => go("game"));
});

scene("chartest", () => {
	const player = add([
		pos(width() / 3 , height() / 2),
		sprite("capy"),
		area(),
		body(),
		z(1),
	]);

	add([
	  sprite("background", {width: width(), height: height()}),
	  pos(width() / 2, height() / 2),
	  anchor("center"),
	  scale(1),
	  fixed()
	]);

	//floor and trim
	let tileAmount = width() / 48;
	for(let i = 0; i < tileAmount; i++){
		add([
			sprite("grass"),
			pos(i * 48, height()),
			anchor("botleft"),
			area(),
			body({isStatic: true}),
			z(100),
			"floor",
		]);

		add([
			sprite("grass trim"),
			pos(i * 48, height() - FLOOR_HEIGHT + 6),
			anchor("botleft"),
			z(100),
			"floor",
		]);
	}

	//obstacles
	
	function spawnObsactle(){
		let obsTileAmount = Math.ceil(height() / 120);
		console.log(obsTileAmount)
		let beginOpening = Math.ceil(rand(2, obsTileAmount - 3))
		let lampLevel = obsTileAmount - 1;

		for (let i = 1; i <= obsTileAmount; i++) {
			if(i === 1){
				add([
					pos(width() + OFFSET_OFFSCREEN, height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
					sprite("b1"),
					area(),
					move(LEFT, SPEED),
					offscreen({ destroy: true }),
					z(2),
					"pipe",
					{ passed: false },
				]);
				bambooLeafType(i);
			} else if(i != beginOpening && i != beginOpening + 1){
				bambooBaseType(i);
				bambooLeafType(i);
				if(i === lampLevel){
					createLamp(i);
				}
			}
		}
	};

	//spawn a pipe every 1 sec
	loop(1.3, () => {
		spawnObsactle()
	});
	//spawnObsactle()

	//player inputs
	onKeyPress("space", () => {
		player.jump();
		player.moved = true;
	});

	onClick(() => {
		player.jump();
		player.play('fly')
		player.moved = true;
	});

	onKeyPress("up", () => {
		player.jump();
		player.moved = true;
	});

});

scene("game", () => {
	let obsTileAmount = Math.ceil(height() / 120);
	let timing = obsTileAmount * 0.1625;

	const player = add([
		pos(width() / 3 , height() - FLOOR_HEIGHT - 64),
		sprite("capy"),
		area(),
		body(),
		z(1),
	]);

	add([
	  sprite("background", {width: width(), height: height()}),
	  pos(width() / 2, height() / 2),
	  anchor("center"),
	  scale(1),
	  fixed()
	]);

	//floor and trim
	let tileAmount = width() / 48;
	for(let i = 0; i < tileAmount; i++){
		add([
			sprite("grass"),
			pos(i * 48, height()),
			anchor("botleft"),
			area(),
			body({isStatic: true}),
			z(100),
			"floor",
		]);

		add([
			sprite("grass trim"),
			pos(i * 48, height() - FLOOR_HEIGHT + 6),
			anchor("botleft"),
			z(100),
			"floor",
		]);
	}

	//player inputs
	onKeyPress("space", () => {
		player.jump();
		player.play('fly')
		player.moved = true;
	});

	onClick(() => {
		player.jump();
		player.play('fly')
		player.moved = true;
	});

	onKeyPress("up", () => {
		player.jump();
		player.play('fly')
		player.moved = true;
	});

	function spawnObsactle(){
		let beginOpening = Math.ceil(rand(1, obsTileAmount - 3))
		let lampLevel = obsTileAmount - 1;

		for (let i = 1; i <= obsTileAmount; i++) {
			if(i === 1){
				add([
					pos(width() + OFFSET_OFFSCREEN, height() - TILE_HEIGHT * i - FLOOR_HEIGHT),
					sprite("b1"),
					area(),
					move(LEFT, SPEED),
					offscreen({ destroy: true }),
					z(2),
					"pipe",
					{ passed: false },
				]);
				bambooLeafType(i);
			} else if(i != beginOpening && i != beginOpening + 1){
				bambooBaseType(i);
				bambooLeafType(i);
				if(i === lampLevel){
					createLamp(i);
				}
			}
		}

	};
	

	//player collision with pipes 
	player.onCollide("pipe", ()=> {
		go("lose", score);
		addKaboom(player.pos);
	});

	//player touches ground after game starts
	player.onCollide("floor", ()=> {
		if(player.moved === true){
			go("lose", score);
			addKaboom(player.pos);
		}
	});

	//player goes out of bounds
	player.onUpdate(() => {
		if(player.pos.y >= height() || player.pos.y <= CEILING){
			go("lose", score);
		}
	});

	//check if player passed a pipe
	onUpdate("pipe", (p) => {
		if(p.pos.x + p.width <= player.pos.x && p.passed === false){
			addScore();
			p.passed = true;
		}
	});

	//spawn a pipe every 1 sec
	loop(timing, () => {
		spawnObsactle()
	});

	//updating score
	let score = 0;

	const scoreLabel = add([
		text(score),
		anchor("center"),
		pos(width() / 2, 80),
		fixed(),
		z(100),
	])

	function addScore() {
		score++
		scoreLabel.text = score
	}
})

scene("lose", (score) => {

	add([
		sprite("capy"),
		pos(width() / 2, height() / 2 - 108),
		scale(2),
		anchor("center"),
	])

	// display score
	add([
		text(score),
		pos(width() / 2, height() / 2 + 108),
		scale(3),
		anchor("center"),
	])

	// go back to game with space is pressed
	onKeyPress("space", () => go("game"))
	onClick(() => go("game"))

})

go("start")