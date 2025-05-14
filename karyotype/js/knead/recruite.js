import { gist } from "../domen-functions.js";
import { character } from "../find/indentity/character.js";
import { actor, actorID } from "../find/hero.js";
import { act } from "./stage.js";

export function recruite(heroes, field, data) {
	heroes.forEach((hero, index) => field.append(come(hero, index, data)));

	function come(hero, index, data) {
		return deploy(host(actorID(hero)), visible(actorID(hero)), understand(actor(data, hero)), hero);

		function host(name) {
			const host = element(name, {id: name});
			host.classList.add("hero");
			host.setAttribute("id", name);
			host.style.gridArea = name;
			return host;
		}
		
		function visible(name) {
			const actor = document.createElement("div"); 
			actor.classList.add("actor");
			return actor;
		}
	}
}

export function element(name, {content = "", id = "", tag = "div"} = {}) {
	const element = document.createElement(tag);
	element.classList.add(name);
	if (id != "") { element.setAttribute("id", id) };
	element.innerHTML = content;
	return element;
}

function understand(actor) {
	const implementation = gist(actor);
	return [
		implementation["name"],
		implementation["image"],
		...character(actor).map(fact => implementation[fact.pattern["$ref"]])
	];
}

function deploy(hero, actor, gist, data) {
	gist.forEach(property => actor.append(property));
	hero.append(actor)
	act(hero, data);
	return hero;
}
