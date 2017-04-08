/**
 * Keyboard class
 * Create keyboard event and check key
 */
 class Keyboard {
 	constructor(keyCode) {
 		
 		this.keyCode = keyCode;
 		this.isDown = false;
 		this.isUp = true;

 		this.press = undefined;
 		this.release = undefined;

 		//Set event on each key
 		document.addEventListener("keydown", this.downHandler.bind(this), false);
 		document.addEventListener("keyup", this.upHandler.bind(this), false);
 	}

	downHandler(e) {
		//Check if the key is press
		if (e.keyCode === this.keyCode) {
			//If was not press and function press is defined
			if (this.isUp && this.press) this.press();
			this.isDown = true;
			this.isUp = false;
		}
		e.preventDefault();
	}

	upHandler(e) {
		if (e.keyCode === this.keyCode) {
			if (this.isDown && this.release) this.release();
			this.isDown = false;
			this.isUp = true;
		}
		e.preventDefault();
	}
}