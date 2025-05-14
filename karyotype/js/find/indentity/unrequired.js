export function trait(entity, part, trait, message) {
	if (!unrequired(entity, part)) {
		console.error(message(entity.id));
		return notDefined();
	}
	if (has(entity, trait, part)) {
		return get(entity, trait, part);
	}
	return notDefined();
}

function find(entity, unrequired, trait) {
    return entity[unrequired].filter(property => property.pattern["$ref"] == trait)[0];
}

function get(entity, trait, unrequired) {
	return find(entity, unrequired, trait).value;
}

function has(entity, trait, unrequired) {
	return find(entity, unrequired, trait)? true : false;
}

function unrequired(entity, part) {
	return entity.hasOwnProperty(part);
}

export function property(entity, part) {
	return unrequired(entity, part)? entity[part] : [];
}

function notDefined(){
	return "NOT_DEFINED";
}