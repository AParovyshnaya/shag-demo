import { element } from "../knead/recruite.js";
import { skills as actions } from "../domen-functions.js";
import { skills } from "../find/indentity/skills.js";

export function destroy() {
	document.oncontextmenu = () => false;
	document.addEventListener("mousedown", (event) => left(event));

	function left(event) {
		if (!event.target.classList.contains("context_menu") && event.button === 0) {
			remove();
		}
	}
}

//TODO: make default menu

export function act(hero, actor) {
	hero.addEventListener("mousedown", (event) => choose(event));

	function choose(event) {
		(event.button === 2) ?
			build(menu(event, actor)) : remove();
	}

	function build(list) {
		remove();
		document.body.appendChild(list);
	}

	function menu(event, actor) {
		return host(event, menu(actor));

		function host(event, menu) {
			const host = element("context_menu", { id: "context_menu" });
			coordinate(host, event);
			host.append(menu);
			return host;

			function coordinate(menu, event) {
				menu.style.left = event.pageX + 15 + 'px';
				menu.style.top = event.pageY + 10 + 'px';
			}
		}

		function menu(actor) {
			const menu = element("context_menu", { tag: "ul" });
			acted(actor);
			return menu;

			function acted(actor) {
				(skills(actor).length == 0) ? blank(menu) : skills(actor).forEach(action => establish(menu, action));

				function establish(menu, act) {
					menu.append(hand(act.title, actions()[act.function]));

					function hand(text, action) {
						const hand = element("context_menu", { content: text, tag: "li" });
						hand.addEventListener("click", action);
						return hand;
					}
				}

				function blank(menu) {
					menu.append(element("empty", { content: "У этого героя нет действий.", tag: "li" }))
				}
			}
		}
	}
}

function remove() {
	let fantom = document.getElementById("context_menu");
	if (fantom != null) {
		fantom.remove();
	}
}
