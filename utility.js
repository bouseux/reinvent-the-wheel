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