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

//pairs(object)
//Convert an object into a list of [key, value] pairs.
function pairs(obj) {
	var keysArray = keys(obj);
	var valuesArray = values(obj);

	var length = keysArray.length;

	var pairs = new Array(length);

	for(var i = 0; i < length; i++) {
		pairs[i] =  new Array(2);
		pairs[i][0] = keysArray[i];
		pairs[i][1] = valuesArray[i];
	}

	return pairs;
}

//invert(object) 
//Returns a copy of the object where the keys have become the values and the values the keys.
function invert(obj) {

	var output = {};

	for (var prop in obj) {
		output[obj[prop]] = prop;

	}

	return output;
}























