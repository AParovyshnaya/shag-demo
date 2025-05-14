export function find(data, id, list) {
	try {
		check(data, list);
		return findAtList(data[list], id);
	} catch (exeption) {
		console.error(exeption);
	}
}

export function list(data, list) {
	check(data, list);
	return data[list];
}

export function findAtList(list, id) {
	//TODO: make it safe
	return Array.from(list).filter(element => element.id == id)[0];
}

function check(data, list) {
	comply(data, "http:/shag.com/theatre#//Theatre");
	if (!["scenes", "actors", "tempers"].includes(list)) {
		throw new SyntaxError(`List name "${list}" is not correct.`);
	}
}

export function comply(object, eclass) {
	if (!object.hasOwnProperty("eClass")) {
		throw new SyntaxError(`Data is not EObject`);
	}
	if (object.eClass != eclass) {
		throw new SyntaxError(`Data type is not "http:/shag.com/theatre#//Theatre" (${object.eClass}).`);
	}
}