import { element } from "../knead/recruite.js";
import { find } from "../find/find.js";
import { name, neighbours, scenes } from "../find/scene.js";
import { capitalize } from "../perform/form.js";

export function link(scene, data) {
	if (!scenes(data)) {
		return;
	}
	clean("neighbours_from", "neighbours_to");
	glance(scene, data, false, "neighbours_from");
	glance(scene, data, true, "neighbours_to");
}

function glance(scene, data, direction, target) {
	deploy(search(scene, data, direction), target, !direction, data);
}

function search(scene, data, direction) {
	return neighbours(data, direction, scene);
}

function deploy(tethers, target, direction, data) {
	const container = document.getElementById(target);
	tethers.forEach(tether => container.append(fulfill(tether, target)));

	function fulfill(tether) {
		const button = element(tether, {content: capitalize(find(data, tether, "scenes").name), tag: "button"});
		button.dataset.target = tether;
		button.dataset.direction = name(direction);
		return button;
	}
}

function clean(...sides) {
	sides.forEach(side => document.getElementById(side).replaceChildren())
}