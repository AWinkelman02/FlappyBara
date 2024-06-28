import kaboom from "kaboom"

const FLOOR_HEIGHT = 48;
const OBSTACLE_MIN = 84;
const OBSTACLE_OPENING = 240;
const OBSTACLE_WIDTH = 60;
const CEILING = -60;
const SPEED = 480;

kaboom()

setBackground(84, 255, 244)

loadSprite("bean", "sprites/bean.png")

// define gravity
setGravity(2600)

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

scene("game", () => {

	const player = add([
		sprite("bean"),
		pos(width() / 4, height() - FLOOR_HEIGHT*2),
		area(),
		//body(),
		{ moved: false },
	]);

	//floor
	add([
		rect(width(), FLOOR_HEIGHT),
		outline(4),
		pos(0, height()),
		anchor("botleft"),
		area(),
		body({isStatic: true}),
		color(127, 200, 255),
		"floor",
	]);

	//player inputs
	onKeyPress("space", () => {
		player.jump();
		player.moved = true;
	});

	onClick(() => {
		player.jump();
		player.moved = true;
	});

	onKeyPress("up", () => {
		player.jump();
		player.moved = true;
	});

	function spawnObsactle(){
		const p1 = rand(OBSTACLE_MIN, height() - OBSTACLE_MIN - OBSTACLE_OPENING);
		const p2 = height() - p1 - OBSTACLE_OPENING - FLOOR_HEIGHT;

		add([
			pos(width(), 0),
			rect(OBSTACLE_WIDTH, p1), //OBSTACLE_WIDTH, p1
			color(0, 127, 255),
			outline(4),
			area(),
			move(LEFT, SPEED),
			offscreen({ destroy: true }),
			"pipe",
		]);

		add([
			pos(width(), height() - FLOOR_HEIGHT),
			rect(OBSTACLE_WIDTH, p2), //OBSTACLE_WIDTH, p2
			color(0, 127, 255),
			anchor("botleft"),
			outline(4),
			area(),
			move(LEFT, SPEED),
			offscreen({ destroy: true }),
			"pipe",
			{ passed: false },
		]);
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
	loop(1.1, () => {
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
		sprite("bean"),
		pos(width() / 2, height() / 2 - 108),
		scale(3),
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