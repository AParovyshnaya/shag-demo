import { temper } from "./find/indentity/character.js";

import { capitalize } from "./perform/form.js";

import { element } from "./knead/recruite.js";
import { illustrate } from "./knead/illustrate.js";

/**
 * Describes how transform actor fact to HTML-element for all tempers, which some actor may have. If temper is not realised at the actor, it wont lead error - element will not deployed.
 * These elements will be at #actor-id.hero.
 * @param {Actor} twin Data-twin of some actor.
 * @return {Object} A list, where temper id associated with HTML-element. Must contain not-temper values: image and name. 
 */
export function gist(twin) {
	return {
		"name": element("name", { content: capitalize(twin.name) }),
		"image": illustrate(twin),
		"chromosome_group": element("chromosome_group", { content: "группа " + temper(twin, "chromosome_group") }),
	};
}

/**
 * Provides actor skills. Realise ActorAction feature.
 * Actor may have buttons linked with actions. Action is void function.
 * @return {Object} A list, where ActorAction.function identificator tethers void function.
 */
export function skills() {
	return {
		"trysomy8": trysomy8,
		"trysomy13": trysomy13,
		"trysomy18": trysomy18,
		"trysomy21": trysomy21,
	}
}

function trysomy8() {
	alert("Трисомия по восьмой хромосоме — синдром Варкани \n Преобладает у мальчиков. Характерны отклонения в строении лица, пороки опорно-двигательного аппарата и мочевой системы. Полные трисомии летальны. Описан случай, когда обладатель неполной трисомии дожил до 17 лет. \n Вызывается мутацией на ранних стадиях бластулы. Организм получается мозаичным — состоит из клеток с разным генетическим материалом");
}

function trysomy13() {
	alert("Трисомия по тринадцатой хромосоме — синдром Патау \n Многоводье при родах ребёнка с синдромом Патау встречается в половине случаев. Признаки: недовес, пороки лица, нарушение развития ЦНС. \n Появление синдрома зависит от возраста матери. \n Подавляющее большинство больных погибает до 1 года. Оставшиеся в живых страдают идиотей.");
}

function trysomy18() {
	alert("Трисомия по восемнадцатой хромосоме — синдром Эдварса \n Лишняя хромосома обычно появляется до оплодотворения: одна из гамет получила лишнюю хромосому при расхождении в мейотическом делении. В 10% случаях есть мозаицизм. Появление трисомии зависит от возраста матери. Симптомы: аномалии черепа и грудной клетки, пороки сердца");
}

function trysomy21() {
	alert("Единственный случай трисомии, когда больной живёт больше года. \n https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D0%B4%D1%80%D0%BE%D0%BC_%D0%94%D0%B0%D1%83%D0%BD%D0%B0");
}