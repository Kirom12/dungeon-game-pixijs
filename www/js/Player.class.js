/**
 * Player Class
 */
class Player extends Character {
	constructor(data) {
		let sprite = new Game.Sprite(Game.assets.character_test.texture);

		super(data, sprite);

		this.key = {
 			up : new Keyboard(38),
 			down : new Keyboard(40),
 			left : new Keyboard(37),
 			right : new Keyboard(39)
 		}

 		this.setMovement();
 		this.centerMapOnPlayer();
	}

	setMovement() {
		var _this = this;

		//Arrow Movements
		this.key.up.press = function() {
			_this.vy = -_this.speed;
		}
		this.key.up.release = function() {
			_this.vy = 0;
		}

		this.key.down.press = function() {
			_this.vy = _this.speed;
		}
		this.key.down.release = function() {
			_this.vy = 0;
		}

		this.key.left.press = function() {
			_this.vx = -_this.speed;
		}
		this.key.left.release = function() {
			_this.vx = 0;
		}

		this.key.right.press = function() {
			_this.vx = _this.speed;
		}
		this.key.right.release = function() {
			_this.vx = 0;
		}
	}

	update() {
		//Test map collision
		for (let i in Game.layers.collision.children) {
			if (Collision.square(this.sprite, Game.layers.collision.children[i])) {
				let direction = Helper.getDirection(this.sprite, Game.layers.collision.children[i]);

				this.sprite.x = this.sprite.x - Math.cos(direction) * this.speed;
				this.sprite.y = this.sprite.y - Math.sin(direction) * this.speed;
				this.centerMapOnPlayer();
			}
		}
	}

	centerMapOnPlayer() {
		Game.mapContainer.x = -(this.sprite.x*Game.stage.scaleModifier)+(Game.stage.width/2);
		Game.mapContainer.y = -(this.sprite.y*Game.stage.scaleModifier)+(Game.stage.height/2);
	}
}