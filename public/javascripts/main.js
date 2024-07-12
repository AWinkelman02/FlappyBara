import kaboom from "kaboom"
import { bambooBaseType, bambooLeafType, createLamp } from "./bamboo.js"
import { compareScore, getBestScore, checkMedal, getMedal, medalList, postLeaderboardData } from "./scores.js"
import { header } from "express-validator";

const FLOOR_HEIGHT = 48;
const TILE_HEIGHT = 120;
const CEILING = -130;
const SPEED = 300;
const OFFSET_OFFSCREEN = 95;

kaboom();

setBackground(102, 207, 46)

//sounds
loadSound("jungle", "./images/sounds/jungle_prince.mp3");
loadSound("flap", "./images/sounds/flap.mp3");
loadSound("click", "./images/sounds/click.wav");

//sprites and assets
loadSprite("background", "./images/assets/background.png");
loadSprite("title", "./images/assets/fonts/title.png");
loadSprite("btn1", "./images/assets/button 1.png");
loadSprite("btn2", "./images/assets/button 2.png");
loadSprite("scorecard", "./images/assets/scorecard.png");
loadSprite("medal frame", "./images/assets/medal frame.png");
loadSprite("header", "./images/assets/lb header.png");
loadSprite("row", "./images/assets/lb row.png");
loadSprite("footer", "./images/assets/lb footer.png");
loadSprite("grass", "./images/assets/grass block.png");
loadSprite("grass trim", "./images/assets/grass trim.png");
loadSprite("lamp", "./images/assets/lamp.png");
loadSprite("ghost", "./images/sprites/ghost.png");
loadSprite("arrow", "./images/assets/arrow.png");
loadSprite("jump lines", "./images/assets/jump lines.png");

loadSpriteAtlas("./images/sprites/capybara.png", {
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

loadSpriteAtlas("./images/assets/bamboo.png", {
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

loadSpriteAtlas("./images/assets/bamboo leaves.png", {
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

loadSpriteAtlas("./images/assets/medals.png", {
	'bronze': {
		x: 0,
		y: 0,
		width: 85,
		height: 85,
		sliceX: 1,
	},
	'silver': {
		x: 85,
		y: 0,
		width: 85,
		height: 85,
		sliceX: 1,
	},
	'gold': {
		x: 170,
		y: 0,
		width: 85,
		height: 85,
		sliceX: 1,
	},
	'plat': {
		x: 255,
		y: 0,
		width: 85,
		height: 85,
		sliceX: 1,
	},
	'diamond': {
		x: 340,
		y: 0,
		width: 85,
		height: 85,
		sliceX: 1,
	},
	'none': {
		x: 425,
		y: 0,
		width: 85,
		height: 85,
		sliceX: 1,
	},
});

loadSpriteAtlas("./images/assets/new tag.png", {
	'new': {
		x: 0,
		y: 0,
		width: 77,
		height: 37,
		sliceX: 1,
	},
	'old': {
		x: 77,
		y: 0,
		width: 77,
		height: 37,
		sliceX: 1,
	},
});

loadSpriteAtlas("./images/assets/ui keys.png", {
	's': {
		x: 0,
		y: 0,
		width: 32,
		height: 32,
		sliceX: 1,
	},
	'sx': {
		x: 32,
		y: 0,
		width: 32,
		height: 32,
		sliceX: 1,
	},
	'm': {
		x: 64,
		y: 0,
		width: 32,
		height: 32,
		sliceX: 1,
	},
	'mx': {
		x: 96,
		y: 0,
		width: 32,
		height: 32,
		sliceX: 1,
	},
});

//font
loadFont("pixelify", "./images/assets/fonts/PixelifySans-Medium.ttf")

// define gravity
setGravity(0)

function backgroundMusic(){
	//background music
	play("jungle", {
		loop: true,
	});
}

//backgroundMusic();

//button sound effect
let playSound = true;
let playMusic = true;

function buttonSoundEffect(){
	if (playSound === true) {
		play("click");
	}
}

function flySoundEffect(){
	if (playSound === true) {
		play("flap");
	}
}

function uiKeysSounds(){
	const sfx = add([
		pos(80, height() - 120),
		sprite("s"),
		area(),
		z(101),
	])

	const sfxX = add([
		pos(80, height() - 120),
		sprite("sx"),
		area(),
		z(101),
	])

	add([		
		text("Mute Sounds", {
			font: "Pixelify"
		}),
		//anchor("left"),
		color(255, 255, 255),
		pos(122, height() - 120),
		z(101),
	])

	if(playSound === true){
		readd(sfx)
	} else {
		readd(sfxX)
	}
}

function uiKeysMusic(){
	const music = add([
		pos(80, height() - 162),
		sprite("m"),
		area(),
		z(101),
	])

	const musicX = add([
		pos(80, height() - 162),
		sprite("mx"),
		area(),
		z(101),
	])

	add([		
		text("Mute Music", {
			font: "Pixelify"
		}),
		//anchor("left"),
		color(255, 255, 255),
		pos(122, height() - 162),
		z(101),
	])

	if(playMusic === true){
		readd(music)
	} else {
		readd(musicX)
	}
}

scene("start", () => {
	onUpdate(() => setCursor("default"));

	add([
		sprite("background", {width: width(), height: height()}),
		pos(width() / 2, height() / 2),
		anchor("center"),
		scale(1),
		fixed()
	]);

	//sound effect and music ui
	uiKeysSounds();
	uiKeysMusic();

	//sound toggle
	onKeyPress('s', () => {
		if(playSound === true){
			playSound = false;
			uiKeysSounds();
		} else {
			playSound = true;
			uiKeysSounds();
		}
	});

	//music toggle
	onKeyPress('m', () => {
		if(playMusic === true){
			playMusic = false;
			uiKeysMusic();
		} else {
			playMusic = true;
			uiKeysMusic();
		}
	});

	add([
		sprite("title"),
		pos(width() / 2, height() / 4),
		anchor("center"),
		scale(1.5),
		fixed()
	]);

	let btnStart = add([
		sprite("btn1"),
		pos(width() / 2, height() / 1.9),
		area(),
		scale(1),
		anchor("center"),
		"start",
		opacity(1),
	]);

	btnStart.add([
		text("Start", {
			font: "Pixelify"
		}),
		anchor("center"),
		color(0, 0, 0),
	]);

	btnStart.onHoverUpdate(() => {
		setCursor("pointer")
		btnStart.scale = vec2(1.2)
	});

	btnStart.onHoverEnd(() => {
		btnStart.scale = vec2(1)
		btnStart.color = rgb()
	});

	btnStart.onClick(() => {
		go("game");
		buttonSoundEffect();
	})

	const btnLeader = add([
		sprite("btn1"),
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
		setCursor("pointer")
		btnLeader.scale = vec2(1.2)
	});

	btnLeader.onHoverEnd(() => {
		btnLeader.scale = vec2(1)
		btnLeader.color = rgb()
	});

	btnLeader.onClick(() => {
		go("scoreboard");
		buttonSoundEffect();
	})
});

scene("scoreboard", () => {
	let medals = medalList(getMedal());

	async function getSBData(){
		fetch('/data', {mode: 'cors'})
		.then((response)=>{
			return(response.json());
		})
		.then((response)=>{
			for (let i = 0; i < response.leaderboard.length + 1; i++) {
				if(i != response.leaderboard.length){
					buildBoardRow(i, response.leaderboard[i].name, response.leaderboard[i].score);
				} else {
					buildBoardFooter(i);
				}
			}
		})
	}

	getSBData();

	add([
		sprite("background", {width: width(), height: height()}),
		pos(width() / 2, height() / 2),
		anchor("center"),
		scale(1),
		fixed()
	]);

	//sound effect and music ui
	uiKeysSounds();
	uiKeysMusic();

	//sound toggle
	onKeyPress('s', () => {
		if(playSound === true){
			playSound = false;
			uiKeysSounds();
		} else {
			playSound = true;
			uiKeysSounds();
		}
	});

	//music toggle
	onKeyPress('m', () => {
		if(playMusic === true){
			playMusic = false;
			uiKeysMusic();
		} else {
			playMusic = true;
			uiKeysMusic();
		}
	});

	const btnHome = add([
		sprite("btn2"),
		pos(width() / 8, height() / 7),
		area(),
		scale(1),
		anchor("center"),
		outline(4),
	]);

	btnHome.add([
		text("Back", {
			font: "Pixelify"
		}),
		anchor("center"),
		color(0, 0, 0),
	]);

	btnHome.onHoverUpdate(() => {
		const t = time() * 10
		btnHome.scale = vec2(1.2)
		setCursor("pointer")
	});

	btnHome.onHoverEnd(() => {
		btnHome.scale = vec2(1)
		btnHome.color = rgb()
	});

	btnHome.onClick(() => {
		go("start");
		buttonSoundEffect();
	})

	//medals
	add([
		sprite("medal frame"),
		pos(width() / 4, height() / 7),
		anchor("top"),
		scale(1),
		fixed()
	]);

	for (let i = 0; i < medals.length; i++) {
		add([
			sprite(medals[i]),
			pos(width() / 4 - 43, height() / 7 + 27 + i * 93),
		]);
	} 

	//leaderboard
	add([
		sprite("header"),
		pos(width()/ 2, height()/7),
		fixed(),
		anchor("top"),
	]);

	//build scoreboard
	function buildBoardRow(i, name, score){
		let row = add([
			sprite("row"),
			pos(width()/ 2, height()/7 + 96 + 83 * i),
			fixed(),
			anchor("top"),
		]);

		row.add([
			text(name, {
				font: "Pixelify"
			}),
			pos(-200, 17),
			color(255, 255, 255),
		]);

		row.add([
			text(score, {
				font: "Pixelify"
			}),
			pos(130, 36),
			anchor("center"),
			color(255, 255, 255),
		]);
	}
	
	function buildBoardFooter(i){
		add([
			sprite("footer"),
			pos(width()/ 2, height()/7 + i * 83 + 96),
			fixed(),
			anchor("top"),
		])
	}
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

	//sound effect and music ui
	uiKeysSounds();
	uiKeysMusic();

	//sound toggle
	onKeyPress('s', () => {
		if(playSound === true){
			playSound = false;
			uiKeysSounds();
		} else {
			playSound = true;
			uiKeysSounds();
		}
	});

	//music toggle
	onKeyPress('m', () => {
		if(playMusic === true){
			playMusic = false;
			uiKeysMusic();
		} else {
			playMusic = true;
			uiKeysMusic();
		}
	});

	//start round info
	add([
		text( "Click or Press Space to Jump",{
			font: "Pixelify"
		}),
		color(255,255,255),
		pos(width()/4, height()/4),
		scale(1.4),
		anchor("left"),
		"ghost",
	])

	add([
		pos(width() / 2.4, height() / 3),
		sprite("arrow"),
		z(1),
		"ghost",
	])


	add([
		pos(width() / 2.1, height() / 3),
		sprite("ghost"),
		z(1),
		"ghost",
	])

	add([
		pos(width() / 2.1 - 20, height() / 3 + 68),
		sprite("jump lines"),
		z(1),
		"ghost",
	])


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
			flySoundEffect();
			removeGhosts();
		} else {
			player.jump();
			player.play('fly')
			flySoundEffect();
			removeGhosts();
		}
	});

	onClick(() => {
		if(player.moved === false){
			setGravity(3200)
			player.moved = true;
			player.jump();
			player.play('fly');
			flySoundEffect();
			removeGhosts();
		} else {
			player.jump();
			player.play('fly');
			flySoundEffect();
			removeGhosts();
		}
	});

	onKeyPress("up", () => {
		if(player.moved === false){
			setGravity(3200)
			player.moved = true;
			player.jump();
			player.play('fly')
			flySoundEffect();
			removeGhosts();
		} else {
			player.jump();
			player.play('fly')
			flySoundEffect();
			removeGhosts();
		}
	});

	function removeGhosts(){
		destroyAll("ghost");
	}

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
		go("lose", score, currBest);
	});

	//player touches ground after game starts
	player.onCollide("floor", ()=> {
		if(player.moved === true){
			go("lose", score, currBest);
		}
	});

	//player goes out of bounds
	player.onUpdate(() => {
		if(player.pos.y >= height() || player.pos.y <= CEILING){
			go("lose", score, currBest);
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
	let currBest = getBestScore();

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

scene("lose", (score, currBest) => {
	let tag = "old"
	let best = 0;
	let checkBest = compareScore(score);

	if(currBest < score){
		tag = "new"
	}

	if( checkBest === "new"){
		best = score;
	} else {
		best = getBestScore();
	}	

	add([
		sprite("background", {width: width(), height: height()}),
		pos(width() / 2, height() / 2),
		anchor("center"),
		scale(1),
		fixed()
	]);

	//sound effect and music ui
	uiKeysSounds();
	uiKeysMusic();

	//sound toggle
	onKeyPress('s', () => {
		if(playSound === true){
			playSound = false;
			uiKeysSounds();
		} else {
			playSound = true;
			uiKeysSounds();
		}
	});

	//music toggle
	onKeyPress('m', () => {
		if(playMusic === true){
			playMusic = false;
			uiKeysMusic();
		} else {
			playMusic = true;
			uiKeysMusic();
		}
	});

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
		pos(width() / 2 + 285, height() / 2 - 155),
		scale(2),
		anchor("right"),
		color(255, 255, 255),
		z(10),
	])

	let txtBest = add([
		text(best,{ //best
			font: "Pixelify"
		}),
		pos(width() / 2 + 285, height() / 2 - 35),
		scale(2),
		anchor("right"),
		color(255, 255, 255),
		z(10),
	])

	let newTag = add([
		sprite(tag), //tag
		pos(width() / 2 + 30, height() / 2 - 116),
		z(10),
	])

	let medal = add([
		sprite(checkMedal(score)),//score
		pos(width() / 2 - 218, height() / 2 - 141),
	])

	let txtInput = add([
		rect(192, 64, { radius: 8 }),
		pos(width() / 2 + 200, height() / 2 + 120),
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
						this.text += character.toUpperCase();
						txt = this.text;
					}
				})
				
				backEv = onKeyPress("backspace", () => {
					this.text = this.text.slice(0, -1)
					txt = this.text;
				})
			},
			destroy() {
				charEv.cancel()
				backEv.cancel()
			}

		}
	}

 	const btnSubmit = add([
		sprite("btn2"),
		pos(width() / 2 + 200, height() / 2 + 220),
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
		btnSubmit.scale = vec2(1.2)
		setCursor("pointer")
	});

	btnSubmit.onHoverEnd(() => {
		btnSubmit.scale = vec2(1)
	});

	btnSubmit.onClick(() => {
		postLeaderboardData(txt, score);
		go("scoreboard");
		buttonSoundEffect();
	})

	const btnRestart = add([
		sprite("btn2"),
		pos(width() / 2 - 200, height() / 2 + 350),
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
		btnRestart.scale = vec2(1.2)
		setCursor("pointer")
	});

	btnRestart.onHoverEnd(() => {
		btnRestart.scale = vec2(1)
	});
 
	btnRestart.onClick(() => {
		go("game");
		buttonSoundEffect();
	})

	const btnHome = add([
		sprite("btn2"),
		pos(width() / 2 + 200, height() / 2 + 350),
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
		btnHome.scale = vec2(1.2)
		setCursor("pointer")
	});

	btnHome.onHoverEnd(() => {
		btnHome.scale = vec2(1)
	});

	btnHome.onClick(() => {
		go("start");
		buttonSoundEffect();
	})
})

go("start")