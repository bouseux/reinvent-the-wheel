//keys(object)
//Retrieve all the names of the object's properties.
function keys(obj) {
	return Object.keys(obj);
}

//values(object)
//Return all of the values of the object's properties.
function values(obj) {
	var results = [];

	for (var prop in obj) {
		results.push(obj[prop]);
	}

	return results;
}

//for...in loop iterates over the properties of an object in an arbitary order
//according to MDN(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

//to insure the iteration takes place in the order of the properties:
function values(obj) {
	var keys = keys(obj);
	var length = keys.length;
	var values = new Array(length);

	for(var i = 0; i < length; i++) {
		values[i] = obj[keys[i]];
	}

	return values;
}