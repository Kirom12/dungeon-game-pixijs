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
			width : 1400,
			height : 800,
			container : new Game.Container(),
			scaleModifier : 2.5
		}

		Game.assets;
		Game.levels = {
			info : [{
				name : "Level 1",
				startX : 400,
				startY : 750
			},
			{
				name : "Level 2",
				startX : 400,
				startY : 770
			}],
			urls : [
				{ name : "mapLvl1", url : "assets/maps/level-1.json"},
				{ name : "mapLvl2", url : "assets/maps/level-2.json"},
			]
		}
		Game.assetsUrls = [
			{ name : "dungeon", url : "assets/tilesets/dungeon_tiles.png"},
			{ name : "dungeon_new", url : "assets/tilesets/dungeon_tiles_new.png"},
			{ name : "collision", url : "assets/tilesets/collision.png"},
			{ name : "character", url : "assets/tilesets/character.png"},
			{ name : "enemies", url : "assets/tilesets/enemies.png"}
		]

		Game.renderer = new Game.autoDetectRenderer(Game.stage.width, Game.stage.height);
		document.body.appendChild(Game.renderer.view);

		Game.preload();
	}

	/**
	 * Load and stock images
	 */
	static preload() {
		let _onAssetsLoaded = function(e, ressources) {
			Game.assets = ressources;

			Game.setup();
		}

		Game.loader.add(Game.assetsUrls);
		Game.loader.add(Game.levels.urls);
		Game.loader.load(_onAssetsLoaded);
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
		//Load the first level
		Game.loadLevel(0, Game.assets.mapLvl1.data);


		Game.gameLoop();
	}

	/**
	 * Static gameLoop
	 */
	static gameLoop() {
		requestAnimationFrame(Game.gameLoop);

		//Check game status
		Game.play();

		Game.renderer.render(Game.stage.container);
	}

	/**
	 * Display the current level (@TODO : Refactor index ?)
	 *
	 * @param int current index of the map
	 * @param Object current map
	 * @param bool use new tileset file
	 */
	static loadLevel(index, map, newmap = true) {
		let mapTiled = {};

		if (newmap) {
			mapTiled.dungeon_tiles_new = Game.assets.dungeon_new.texture;
		} else {
			mapTiled.dungeon_tiles = Game.assets.dungeon.texture;
		}

		mapTiled.collision = Game.assets.collision.texture;

		Game.mapContainer = getTiledMapContainer(mapTiled, map);

		Game.layers = {
			collision : Game.mapContainer.getChildByName("collision")
		}

		//Set collision layer aplha to 0
		Game.layers.collision.alpha = 0;

		//Set scale and screen position
		Game.mapContainer.scale.set(Game.stage.scaleModifier, Game.stage.scaleModifier)
		Game.mapContainer.x = -(Game.levels.info[index].startX*Game.stage.scaleModifier)+(Game.stage.width/2);
		Game.mapContainer.y = -(Game.levels.info[index].startY*Game.stage.scaleModifier)+(Game.stage.height/2);

		Game.stage.container.addChild(Game.mapContainer);
	}
}