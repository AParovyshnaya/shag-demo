import { x, y } from "../find/hero.js";

export function areas(columns, rows, troupe) {
	let map = empty(columns, rows);
	troupe.forEach(place);
	function place(hero) {
		map[y(hero)][x(hero)] = hero.actor["$ref"];
	}
	return join(map);
}

function join(areas) {
	return areas.map(list => list.join(" ")).reduce(
		function(sum, line) {
			return sum + "'" + line + "' ";
		}, "");
}

function empty(x, y) {
	let empty = Array(y);
	for (let i = 0; i < y; i++) {
		empty[i] = Array(x).fill(".");
	}
	return empty;
}