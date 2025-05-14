import { find } from "../find/find.js";
import { layout } from "../layout/layout.js";
import { knead } from "../knead/knead.js";
import { link } from "../link/link.js";
import { describe } from "../describe/describe.js";

export function scene(data, id) {
	const scene = find(data, id, "scenes");
	const map = document.getElementById("map");
	layout(scene.grid, scene.troupe.heroes);
	knead(scene.troupe, map, data);
	link(scene.id, data);
	describe(scene.name, scene.libretto);
	//grid
	// actors
}