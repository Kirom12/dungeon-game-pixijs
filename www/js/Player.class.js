/**
 * Player Class
 */
class Player extends Character {
	constructor(data) {
		let sprite = new Game.TilingSprite(Game.assets.character.texture, 32, 36);

		super(data, sprite);

		this.key = {
 			up : new Keyboard(38),
 			down : new Keyboard(40),
 			left : new Keyboard(37),
 			right : new Keyboard(39)
 		}

 		this.setMovement();
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
}