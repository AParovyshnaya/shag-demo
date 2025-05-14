export function stand(text, up = true) {
	return typeof text == "string" ? (up ? text.charAt(0).toUpperCase() : text.charAt(0).toLowerCase()) + text.slice(1) : text;
}

export function capitalize(text) {
	return stand(text, true);
}

export function minimaze(text) {
	return stand(text, false);
}

export function tidy(text) {
	const black = text.trim();
	return black + (black.substring(black.length - 1) === "." ? "" : ".");
}

export function conjugateAuto(number, base, declension) { 
	return number +  " " + conjugatedAuto(number, base, declension);
}

function conjugatedAuto(number, base, declension) {
	declension = !(declension == 1 || declension == 2 || declension == 3)? 1 : declension;
	const endings = [["а", "и", "ок"], ["е", "я", "ей"], ["а", "и", "ок"]][declension - 1];
	const last = Number(String(number)[-1]);
	if (last == 1) {
		return base + endings[0];
	} else if (1 > last > 5) {
		return base + endings[1];
	} else {
		return base + endings[2];
	}
}

export function conjugate(number, nominative, singalGenitive, pluralGenitive) {
	return number + " " + conjugated(number, nominative, singalGenitive, pluralGenitive);
}

function conjugated(number, nominative, singalGenitive, pluralGenitive) {
	const last = Number(String(number).at(-1));
	if (last == 1) {
		return nominative;
	} else if (1 < last && last < 5) {
		return singalGenitive;
	} else {
		return pluralGenitive;
	}
}