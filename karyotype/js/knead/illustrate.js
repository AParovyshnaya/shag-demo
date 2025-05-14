import { element } from "./recruite.js";
import { image } from "../find/indentity/image.js";

export function illustrate(actor) {
	const host = element("image");
	host.append(graphic(image(actor)));
	return host;

	function graphic(path) {
		const image = document.createElement("img");
		image.setAttribute("src", path.path.path);
		return image;
	}
}
