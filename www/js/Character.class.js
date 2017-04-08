class Character {
	constructor(sprit,name,attack,defense,life,x,y,vx,vy){

		this.texture;
		this.sprit = sprit;
		this.name = name;
		this.attack = attack;
		this.defense = defense;
		this.life = life;
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
	}


	/**
 	* moving character
 	* @param keyCode,velocity.x, velocity.y 
    * @return int
 	*/

	move(keyCode,vx,vy){

		var up;
		var down;
		var left;
		var right;

		switch(keyCode){

			case "ArrowUp":
				up = true;
				
			break;

			case "ArrowDown":
				down = true;

			break;

			case "ArrowLeft":
				left = true;

			break;

			case "ArrowRight":
				right = true;

			break;

		}

		

			if(up == true){

				this.y -= vy;
				console.log(this.y);
			}
			if(down == true){
				this.y += vy;
				console.log(this.y);

			}
			if(left == true){
				this.x -= vx;
				console.log(this.x);

			}
			if(right == true){
				this.x += vx;
				console.log(this.x);

				
			}


	}


	attack(){
		console.log("move");
	}
	
	hit(){
		console.log("");
	}

	update(){
		console.log("");
	}

		
}


class Player extends Character{
	
}


class Enemy extends Character{
	
}

	

	// document.addEventListener('keydown',function(event){
	// 		var hero = new Player("monSprite","ali",10,10,10,1,1,3,3);
	// 		hero.move(event.key,hero.vx,hero.vy);

			
	// 	})

	// document.addEventListener('keyup',function(event){
	// 		up = false;
	// 		down = false;
	// 		left = false;
	// 		right = false;
	// 	})