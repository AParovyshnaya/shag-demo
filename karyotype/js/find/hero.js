import { find } from "./find.js";

export function actorID(hero) {
	return hero.actor["$ref"];
}

export function actor(data, hero) {
	return find(data, actorID(hero), "actors");
}

export function x(hero) {
	return alignment(hero, "x");
}

export function y(hero) {
	return alignment(hero, "y");
}

function alignment(hero, direction) {
	if (hero.hasOwnProperty("alignment")) {
		return (hero.alignment.hasOwnProperty(direction)) ? hero.alignment[direction] || 0 : 0;
	}
	return 0;
}
