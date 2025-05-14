export function dataError(message = "") {
	this.name = "DataError";
	this.message = message;
}
dataError.prototype = Error.prototype;
