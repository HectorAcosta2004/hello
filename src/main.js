import kaboom from "kaboom"

const k = kaboom()

const zorro =k.add([

k.loadSprite(
	"zorro",
	"sprite/zorro2.png", {
		sliceX: 3,
		sliceY: 1,
		anims: {
			walk: {
				from: 0,
				to: 2,
				loop: true,
				speed: 10,
			},
		}}),
	k.pos(150, 80),
		k.pos(120,150),
		k.sprite('zorro'),
		k.scale(5),
	]);
zorro.play('walk');
