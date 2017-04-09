/**
 * Character Class
 */
class Character {
	constructor(data, sprite) {
		this.x = data.x;
		this.y = data.y;
		this.speed = data.speed;
		this.scale = data.scale;

		this.vx = 0;
		this.vy = 0;

		this.sprite = sprite;

		this.sprite.position.set(this.x-(this.sprite.width*this.scale), this.y-(this.sprite.height*this.scale));
		this.sprite.scale.set(this.scale, this.scale);

		Game.mapContainer.addChild(this.sprite);
	}

	move() {
		this.sprite.x += this.vx;
		this.sprite.y += this.vy;
		Game.mapContainer.x -= this.vx*Game.stage.scaleModifier;
		Game.mapContainer.y -= this.vy*Game.stage.scaleModifier;
	}
}