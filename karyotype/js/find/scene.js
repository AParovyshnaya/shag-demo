import { comply } from "./find.js";

export function neighbours(data, direction, scene) {
	comply(data, "http:/shag.com/theatre#//Theatre");
	return data.tree.tethers.filter(tether => tether[name(direction)]["$ref"] == scene)//
		.map(tether => tether[name(!direction)]["$ref"]);
}

export function name(direction) {
	return direction ? "from" : "to";
}

export function scenes(data) {
	comply(data, "http:/shag.com/theatre#//Theatre");
	return data.tree.tethers != null;
}