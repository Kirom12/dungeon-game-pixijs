/**
 * Static Collision Class
 */
class Collision {
	constructor(){}

	static square(r1, r2) {
		let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

		hit = false;

		//Find centers
		r1.centerX = r1.x + r1.width/2;
		r1.centerY = r1.y + r1.height/2;
		r2.centerX = r2.x + r2.width/2;
		r2.centerY = r2.y + r2.height/2;

		//Find the half-widths and half-heights of each sprite
		r1.halfWidth = r1.width/2;
		r1.halfHeight = r1.height/2;
		r2.halfWidth = r2.width/2;
		r2.halfHeight = r2.height/2;

		//Distance between sprites
		vx = r1.centerX - r2.centerX;
		vy = r1.centerY - r2.centerY;

		//Combinate half distance of two
		combinedHalfWidths = r1.halfWidth + r2.halfWidth;
		combinedHalfHeights = r1.halfHeight + r2.halfHeight;

		//Check for a collision on the x axis
		if (Math.abs(vx) < combinedHalfWidths) {
			//A collision might be occuring. Check for a collision on the y axis
			if (Math.abs(vy) < combinedHalfHeights) {
				//There's definitely a collision happening
				hit = true;
			} else {
				//There's no collision on the y axis
				hit = false;
			}
		} else {
			//There's no collision on the x axis
			hit = false;
		}

		//`hit` will be either `true` or `false`
		return hit;
	}

	static contain() {
		console.log("contain");
	}
}