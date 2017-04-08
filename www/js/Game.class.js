/**
 * Static Game Class
 */
class Game {
	constructor() {}

	/**
	 * Init function, trigger at launch
	 */
	static init() {
		//Aliases
		Game.Container = PIXI.Container;
		Game.autoDetectRenderer = PIXI.autoDetectRenderer;
		Game.loader = PIXI.loader;
		Game.resources = PIXI.loader.resources;
		Game.Sprite = PIXI.Sprite;
		Game.TextureCache = PIXI.utils.TextureCache;
		Game.BaseTexture = PIXI.BaseTexture;
		Game.Texture = PIXI.Texture;
		Game.Graphics = PIXI.Graphics;
		Game.Rectangle = PIXI.Rectangle;
		Game.TilingSprite = PIXI.extras.TilingSprite;
		Game.MovieClip = PIXI.extras.MovieClip;

		Game.stage = {
			width : 1600,
			height : 900,
			container : new Game.Container()
		}

		Game.renderer = new Game.autoDetectRenderer(Game.stage.width, Game.stage.height);
		document.body.appendChild(Game.renderer.view);

		Game.preload();
	}

	/**
	 * Load and stock images
	 */
	static preload() {
		Game.setup();
	}

	/**
	 * Static play method
	 */
	static play() {

	}

	/**
	 * Static setup method
	 */
	static setup() {
		Game.gameLoop();
	}

	static gameLoop() {
		//Check game status
		Game.play();

		Game.renderer.render(Game.stage.container);
	}
}