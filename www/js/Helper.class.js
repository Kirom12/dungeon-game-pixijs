class Helper {
	constructor() {}

	static getDirection(o1, o2) {
		return Math.atan2(o2.y - o1.y, o2.x - o1.x);
	}
}