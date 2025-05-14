import { scene } from "./scene.js";

export function oversee(data) {
	Array.from(document.getElementsByClassName("neighbours")).forEach(side => side.addEventListener("click", event => onGuard(event, data)))
}
	
function onGuard(event, data) {
	if (event.target.tagName.toLowerCase() == "button") {
		scene(data, event.target.dataset.target);
	}
}