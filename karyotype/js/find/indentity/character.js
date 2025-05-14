import { trait, property } from "./unrequired.js";

export function temper(actor, id) {
	return trait(actor, "character", id, (property) =>`Actor with id "${property}" has not character`);
}

export function character(actor) {
	return property(actor, "character");
}