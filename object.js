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

//functions(object) 
//Returns a sorted list of the names of every method in an object 
//— that is to say, the name of every function property of the object.
function functions(obj) {
	var output = [];

	for (var prop in obj) {
		if(typeof obj[prop] === 'function') {
			output.push(prop);
		}
	}

	return output.sort();
}

//extend(destination, *sources) 
//Copy all of the properties in the source objects over to the destination object, and return the destination object.
function extend(destination) {
	var sources = Array.prototype.slice.call(arguments, 1);
	for(var i = 0; i < sources. length; i++) {
		for(var prop in sources[i]) {
			destination[prop] = sources[i][prop];
		}
	}

	return destination;
}

//pick(object, *keys) 
//Return a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys).
function pick(obj) {
	var keys = Array.prototype.slice.call(arguments, 1);
	console.log(keys);
	var output = {};

	for(var i = 0; i < keys.length; i++) {
		for(var prop in obj) {
			if(prop === keys[i]) {
				output[prop] = obj[prop];
			}
		}
	}

	return output;
}

//OR: if(keys[i] in obj)

//omit(object, *keys)
//Return a copy of the object, filtered to omit the blacklisted keys (or array of keys).
function omit(obj) {
	var keys = Array.prototype.slice.call(arguments, 1);
	var output = {};

	for(var i = 0; i < keys.length; i++) {
		for(var prop in obj) {
			if(prop !== keys[i]) {
				output[prop] = obj[prop];
			}
		}
	}
	return output;
}

//defaults(object, *defaults) 
//Fill in undefined properties in object with values from the defaults objects, and return the object. As soon as the property is filled, further defaults will have no effect.
function defaults(obj) {
	var defaults = Array.prototype.slice.call(arguments, 1);

	for(var i = 0; i < defaults.length; i++) {
		for(var prop in defaults[i]) {
			if(!(prop in obj)) {
				obj[prop] = defaults[i][prop];
			}
		}
	}

	return obj;
}

//clone(object)
//Create a shallow-copied clone of the object. Any nested objects or arrays will be copied by reference, not duplicated.
function clone(obj) {
	var output = {};

	for(var prop in obj) {
		output[prop] = obj[prop];
	}

	return output;
}

//tap(object, interceptor) 
//Invokes interceptor with the object, and then returns object. 
//The primary purpose of this method is to "tap into" a method chain, in order to perform operations on intermediate results within the chain.
function tap(obj, interceptor) {
	interceptor(obj);
	return obj;
}

//has(object, key)
//Does the object contain the given key? 
//Identical to object.hasOwnProperty(key), but uses a safe reference to the hasOwnProperty function
function has(obj, key) {
	return obj.hasOwnProperty(key);
}






















