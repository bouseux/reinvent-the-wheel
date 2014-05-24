//identity(value)
//Returns the same value that is used as the argument.
function identity(value) {
	return value;
}

//constant(value) 
//Creates a function that returns the same value that is used as the argument of this function
function constant(value) {
	return function() {
		return value;
	}
}

//times(n, iterator, [context])
//Invokes the given iterator function n times. Each invocation of iterator is called with an index argument. 
//Produces an array of the returned values.
function times(n, iterator, context) {
	var output = [];

	for(var i = 0; i < n; i++) {
		output.push(iterator.call(context, i));
	}

	return output;

}

//random(min, max)
//Returns a random integer between min and max, inclusive. 
//If you only pass one argument, it will return a number between 0 and that number.
function random(min, max) {
	var diff = max ? (max - min) : (min - 0);
	var randomDiff = Math.round(Math.random() * diff);
	var output = max ? (randomDiff + min) : (randomDiff);

	return output;
}

//uniqueId([prefix]) 
//Generate a globally-unique id for client-side models or DOM elements that need one. 
//If prefix is passed, the id will be appended to it.
var idCounter = 0;
function uniqueId(prefix) {
	var id = idCounter++;
	return prefix ? prefix + id : id;
}

//chain(obj) 
//Returns a wrapped object. Calling methods on this object will continue to return wrapped objects until value is used.
function chain(obj) {
	
}





















