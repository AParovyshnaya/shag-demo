import { trait, property } from "./unrequired.js";

export function skill(hero, skill) {
	return trait(hero, "skills", skill, (property) => console.error(`Hero with id "${property}" has not any Actions.`));
}

export function skills(hero) {
	return property(hero, "skills");
}