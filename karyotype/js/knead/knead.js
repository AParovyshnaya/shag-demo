import { clean } from "./clean.js";
import { interact } from "./interact.js";
import { recruite } from "./recruite.js";

export function knead(society, dough, data) {
	clean(dough);
	recruite(society.heroes, dough, data);
	interact(society.heroes, society.interactions)
}

