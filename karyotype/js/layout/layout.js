import {areas} from "./areas.js";

export function layout(grid, troupe) {
	deploy(prepare(grid, areas(grid.columns, grid.rows, troupe)));
}

function deploy(style) {
	const rule = css();
	Object.keys(style).forEach((property) => rule.setProperty("--" + property, style[property]) )
	function css() {
		return document.styleSheets[0].cssRules[0].style;
	}
}

function prepare(grid, areas) {
	let host = {"areas": areas};
	Object.keys(grid).forEach(key => host[key] = grid[key]);
	return host;
}