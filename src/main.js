import kaboom from "kaboom"
import { bambooBaseType, bambooLeafType, createLamp } from "./bamboo.js"

const FLOOR_HEIGHT = 48;
const TILE_HEIGHT = 120;
const CEILING = -130;
const SPEED = 300;
const OFFSET_OFFSCREEN = 95;

kaboom()

setBackground(102, 207, 46)

loadSprite("background", "assets/background.png");
loadSprite("title", "assets/fonts/title.png");
loadSprite("scorecard", "assets/scorecard.png");
loadSprite("grass", "assets/grass block.png");
loadSprite("grass trim", "assets/grass trim.png");
loadSprite("lamp", "assets/lamp.png");

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
	},
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

loadFont("pixelify", "assets/fonts/PixelifySans-Medium.ttf")

// define gravity
setGravity(0)

scene("start", () => {
	onUpdate(() => setCursor("default"));

	add([
		sprite("background", {width: width(), height: height()}),
		pos(width() / 2, height() / 2),
		anchor("center"),
		scale(1),
		fixed()
	]);

	add([
		sprite("title"),
		pos(width() / 2, height() / 4),
		anchor("center"),
		scale(1.5),
		fixed()
	]);

	const btnStart = add([
		rect(240, 80, { radius: 8 }),
		pos(width() / 2, height() / 1.9),
		area(),
		scale(1),
		anchor("center"),
		outline(4),
	]);

	btnStart.add([
		text("Start", {
			font: "Pixelify"
		}),
		anchor("center"),
		color(0, 0, 0),
	]);

	btnStart.onHoverUpdate(() => {
		const t = time() * 10
		btnStart.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
		btnStart.scale = vec2(1.2)
		setCursor("pointer")
	});

	btnStart.onHoverEnd(() => {
		btnStart.scale = vec2(1)
		btnStart.color = rgb()
	});

	btnStart.onClick(() => go("game"))

	const btnLeader = add([
		rect(240, 80, { radius: 8 }),
		pos(width() / 2, height() / 1.5),
		area(),
		scale(1),
		anchor("center"),
		outline(4),
	]);

	btnLeader.add([
		text("Scoreboard", {
			font: "Pixelify"
		}),
		anchor("center"),
		color(0, 0, 0),
	]);

	btnLeader.onHoverUpdate(() => {
		const t = time() * 10
		btnLeader.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
		btnLeader.scale = vec2(1.2)
		setCursor("pointer")
	});

	btnLeader.onHoverEnd(() => {
		btnLeader.scale = vec2(1)
		btnLeader.color = rgb()
	});

	btnLeader.onClick(() => go("lose", 0))
});

scene("chartest", () => {
	// define gravity
	setGravity(0)

	let player = add([
		pos(width() / 3, height() / 3),
		sprite("capy"),
		area(),
		body(),
		z(1),
		{ moved: false },
		"capy",
	]);

	add([
	  sprite("background", {width: width(), height: height()}),
	  pos(width() / 2, height() / 2),
	  anchor("center"),
	  scale(1),
	  fixed()
	]);

	//initialize floor and trim
	let tileAmount = width() / 48;
	for(let i = 0; i < tileAmount; i++){
		add([
			sprite("grass"),
			pos(i * 48, height()),
			anchor("botleft"),
			area(),
			body({isStatic: true}),
			z(100),
			move(LEFT, SPEED),
			offscreen({ destroy: true }),
			"floor",
		]);

		add([
			sprite("grass trim"),
			pos(i * 48, height() - FLOOR_HEIGHT + 6),
			anchor("botleft"),
			z(100),
			move(LEFT, SPEED),
			offscreen({ destroy: true }),
			"floor",
		]);
	}

	//build more floor and trim
	function spawnFloor(){
		let tileAmount = width() / 48;
		for(let i = 0; i < tileAmount; i++){
			add([
				sprite("grass"),
				pos(width() - 2 + i * 48, height()),
				anchor("botleft"),
				area(),
				body({isStatic: true}),
				z(100),
				move(LEFT, SPEED),
				offscreen({ destroy: true }),
				"floor",
			]);
	
			add([
				sprite("grass trim"),
				pos(width() - 2 + i * 48, height() - FLOOR_HEIGHT + 6),
				anchor("botleft"),
				z(100),
				move(LEFT, SPEED),
				offscreen({ destroy: true }),
				"floor",
			]);
		}
	}

	//obstacles
	
	function spawnObsactle(){
		if(player.moved === true){
			let obsTileAmount = Math.ceil(height() / 120);
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
		}
	};

	//spawn a pipe every x sec
	loop(1.3, () => {
		spawnObsactle()
	});
	//spawnObsactle()

	//spawn a floor every x sec
	loop(.8, () => {
		spawnFloor()
	});



	//player inputs
	onKeyPress("space", () => {
		if(player.moved === false){
			setGravity(3200)
			player.moved = true;
			player.jump();
			player.play('fly')
		} else {
			player.jump();
			player.play('fly')
		}
	});

	onClick(() => {
		if(player.moved === false){
			setGravity(3200)
			player.moved = true;
			player.jump();
			player.play('fly')
		} else {
			player.jump();
			player.play('fly')
		}
	});

	onKeyPress("up", () => {
		if(player.moved === false){
			setGravity(3200)
			player.moved = true;
			player.jump();
			player.play('fly')
		} else {
			player.jump();
			player.play('fly')
		}
	});

	//player idle animation
	onLoad(() => {
		if(player.moved === false){
			player.play('fly');
		}
	});
	
	loop(.45, () => {
		if(player.moved === false){
			player.play('fly');
		}
	});
});

scene("game", () => {
	// define gravity
	setGravity(0)

	let obsTileAmount = Math.ceil(height() / 120);
	let timing = obsTileAmount * 0.1625;

	const player = add([
		pos(width() / 3, height() / 3),
		sprite("capy"),
		area(),
		body(),
		z(1),
		{ moved: false },
		"capy",
	]);

	add([
	  sprite("background", {width: width(), height: height()}),
	  pos(width() / 2, height() / 2),
	  anchor("center"),
	  scale(1),
	  fixed()
	]);

	//initialize floor and trim
	let tileAmount = width() / 48;
	for(let i = 0; i < tileAmount; i++){
		add([
			sprite("grass"),
			pos(i * 48, height()),
			anchor("botleft"),
			area(),
			body({isStatic: true}),
			z(100),
			move(LEFT, SPEED),
			offscreen({ destroy: true }),
			"floor",
		]);

		add([
			sprite("grass trim"),
			pos(i * 48, height() - FLOOR_HEIGHT + 6),
			anchor("botleft"),
			z(100),
			move(LEFT, SPEED),
			offscreen({ destroy: true }),
			"floor",
		]);
	}

	//build more floor and trim
	function spawnFloor(){
		let tileAmount = width() / 48;
		for(let i = 0; i < tileAmount; i++){
			add([
				sprite("grass"),
				pos(width() - 2 + i * 48, height()),
				anchor("botleft"),
				area(),
				body({isStatic: true}),
				z(100),
				move(LEFT, SPEED),
				offscreen({ destroy: true }),
				"floor",
			]);
	
			add([
				sprite("grass trim"),
				pos(width() - 2 + i * 48, height() - FLOOR_HEIGHT + 6),
				anchor("botleft"),
				z(100),
				move(LEFT, SPEED),
				offscreen({ destroy: true }),
				"floor",
			]);
		}
	}

	//player inputs
	onKeyPress("space", () => {
		if(player.moved === false){
			setGravity(3200)
			player.moved = true;
			player.jump();
			player.play('fly')
		} else {
			player.jump();
			player.play('fly')
		}
	});

	onClick(() => {
		if(player.moved === false){
			setGravity(3200)
			player.moved = true;
			player.jump();
			player.play('fly')
		} else {
			player.jump();
			player.play('fly')
		}
	});

	onKeyPress("up", () => {
		if(player.moved === false){
			setGravity(3200)
			player.moved = true;
			player.jump();
			player.play('fly')
		} else {
			player.jump();
			player.play('fly')
		}
	});

	function spawnObsactle(){
		if(player.moved === true){
			let obsTileAmount = Math.ceil(height() / 120);
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

	//spawn a floor every x sec
	loop(.79, () => {
		spawnFloor()
	});

	//player idle animation
	onLoad(() => {
		if(player.moved === false){
			player.play('fly');
		}
	});
	
	loop(.45, () => {
		if(player.moved === false){
			player.play('fly');
		}
	});

	//updating score
	let score = 0;

	const scoreLabel = add([
		text(score,{ //score
			font: "Pixelify"
		}),
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
		sprite("background", {width: width(), height: height()}),
		pos(width() / 2, height() / 2),
		anchor("center"),
		scale(1),
		fixed()
	]);

	const menu = add([
		sprite("scorecard"),
		//rect(width() / 3, height() / 3, { radius: 8 }),
		pos(width() / 2, height() / 2),
		area(),
		scale(1),
		anchor("center"),
		fixed(),
		outline(4),
	])

	let txtScore = add([
		text(score,{ //score
			font: "Pixelify"
		}),
		pos(width() / 1.6 + 45, height() / 2.3 - 10),
		scale(2),
		anchor("right"),
		color(255, 255, 255),
		z(10),
	])

	let txtBest = add([
		text(0,{ //score
			font: "Pixelify"
		}),
		pos(width() / 1.6 + 45, height() / 1.8),
		scale(2),
		anchor("right"),
		color(255, 255, 255),
		z(10),
	])

	let txtInput = add([
		rect(192, 64, { radius: 8 }),
		pos(width() / 2 - 200, height() / 2 + 60),
		area(),
		scale(1),
		anchor("center"),
		color(182, 151, 0),
	]);

	txtInput.add([
		text("", {
			font: "Pixelify"
		}),
		input(),
		anchor("center"),
		color(255, 255, 255),
	])

	function input() {
		let charEv
		let backEv
		let maxLength = 8

		return {
			id: "input",
			require: ["text"],
			add() {
				charEv = onCharInput((character) => {
					if (this.text.length < maxLength) {
						this.text += character
					}
				})
				
				backEv = onKeyPress("backspace", () => {
					this.text = this.text.slice(0, -1)
				})
			},
			destroy() {
				charEv.cancel()
				backEv.cancel()
			}
		}
	}

 	const btnSubmit = add([
		rect(192, 64, { radius: 8 }),
		pos(width() / 2 + 200, height() / 2 + 150),
		area(),
		scale(1),
		anchor("center"),
		outline(4),
	]);

	btnSubmit.add([
		text("Submit", {
			font: "Pixelify"
		}),
		anchor("center"),
		color(0, 0, 0),
	]);

	btnSubmit.onHoverUpdate(() => {
		const t = time() * 10
		btnSubmit.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
		btnSubmit.scale = vec2(1.2)
		setCursor("pointer")
	});

	btnSubmit.onHoverEnd(() => {
		btnSubmit.scale = vec2(1)
		btnSubmit.color = rgb()
	});

	const btnRestart = add([
		rect(192, 64, { radius: 8 }),
		pos(width() / 2 - 200, height() / 2 + 280),
		area(),
		scale(1),
		anchor("center"),
		outline(4),
	]);

	btnRestart.add([
		text("Restart", {
			font: "Pixelify"
		}),
		anchor("center"),
		color(0, 0, 0),
	]);

	btnRestart.onHoverUpdate(() => {
		const t = time() * 10
		btnRestart.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
		btnRestart.scale = vec2(1.2)
		setCursor("pointer")
	});

	btnRestart.onHoverEnd(() => {
		btnRestart.scale = vec2(1)
		btnRestart.color = rgb()
	});

	btnRestart.onClick(() => go("game"))

	const btnHome = add([
		rect(192, 64, { radius: 8 }),
		pos(width() / 2 + 200, height() / 2 + 280),
		area(),
		scale(1),
		anchor("center"),
		outline(4),
	]);

	btnHome.add([
		text("Home", {
			font: "Pixelify"
		}),
		anchor("center"),
		color(0, 0, 0),
	]);

	btnHome.onHoverUpdate(() => {
		const t = time() * 10
		btnHome.color = hsl2rgb((t / 10) % 1, 0.6, 0.7)
		btnHome.scale = vec2(1.2)
		setCursor("pointer")
	});

	btnHome.onHoverEnd(() => {
		btnHome.scale = vec2(1)
		btnHome.color = rgb()
	});

	btnHome.onClick(() => go("start"))
})

go("start")