export function describe(scene, libretto) {
	name(scene);
	tell(libretto)
}

function tell(libretto) {
	document.getElementById("description").innerHTML = libretto.text || "";
}

function name(heading) {
	const placeholders = ["A majore ad minus", "A nescire ad non esse",
		"A potentia ad actum", "Fiat lux!", "Finis coronat opus", "Fas est et ab hoste doceri", "Hic bibitur",
		"Gutta cavat lapidem non vi sed saepe cadendo", "Hic sunt dracones",
		"Hodie mihi, cras tibi"];
	document.getElementById("scene_header").innerHTML = heading || placeholders[Math.floor(Math.random() * placeholders.length)];
}