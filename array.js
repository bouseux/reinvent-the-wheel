//first(array, [n])
//returns the first element of an array. passing n will return the first n elements of the array.
function first(array, n) {
	//proceeds only if the first argument is an array
	if (!Array.isArray(array)) {
		return;
	}

	//if n is not provided
	if (!n) { return array[0]; }

	//slice returns the array if n < 0
	if (n < 0) { return [] };

	return array.slice(0, n);
}

//initial(array, [n])
//returns everything but the last entry of the array. pass n to exclude the last n elements from the result.
function initial(array, n) {
	//proceeds only if the first argument is an array
	if (!Array.isArray(array)) {
		return;
	}

	//if n is not provided
	if (!n) { return array.slice(0, -1); }

	if (n < 0) { return []};

	return array.slice(0, -n);
}

//last(array, [n])
//returns the last element of an array. passing n will return the last n elements of the array.
function last(array, n) {
	if (!Array.isArray(array)) {
		return;
	}

	//if n is not provided
	if (!n) { return array[array.length - 1]; }

	//slice returns the array if n < 0
	if (n < 0) { return [] };

	return array.slice(array.length - n);
}

//rest(array, [index])
//returns the rest of the elements in an array. pass an index to return the values of the array from that index onward.
function rest(array, n) {
	if (!Array.isArray(array)) {
		return;
	}

	//if n is not provided
	if (!n) { return array.slice(1); }

	//slice returns the array if n < 0
	if (n < 0) { return [] };

	return array.slice(n);
}

//compact(array)
//Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
function compact(array) {
	if (!Array.isArray(array)) {
		return;
	}

	var copy = [];

	for (var i = 0; i < array.length; i++) {
		if (array[i]) {
			copy.push(array[i]);
		}
	}

	return copy;
}

//OR (using Array.prototype.filter)
function compact(array) {
	if (!Array.isArray(array)) {
		return;
	}

	var copy = array.filter(function(element) {
		if (element) {
			return element;
		}
	})

	return copy;
}

//flatten(array, [shallow])
//Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level.
function flatten(array, shallow) {


	var _flatten = function(array, shallow, copy) {
		if (!Array.isArray(array)) {
			return;
		}


		array.forEach(function(element) {
			if (!Array.isArray(element)) {
				copy.push(element);
			} else {
				shallow ? Array.prototype.push.apply(copy, element) : _flatten(element, shallow, copy);
			}
		})

		return copy;
	}

	return _flatten(array, shallow, []);
}

//without(array, *values)
//returns a copy of the array with all instances of the values removed.
function without(array, values) {
	var input = array;
	var	output = [];
	//arguments is an array-like object, which means it doesn't have any Array methods
	var toRemove = Array.prototype.slice.call(arguments, 1);

	if (!Array.isArray(input)) {
		return;
	}

	var _comparator = function(element) {
		for(var i = 0; i < toRemove.length; i++) {
			if(element === toRemove[i]) {
				return true;
			}
		}

		return false;
	}

	input.forEach(function(element) {
		if(!_comparator(element)) {
			output.push(element);
		}
	})

	return output;
}

//partition(array, predicate) 
//Split array into two arrays: 
//one whose elements all satisfy predicate and one whose elements all do not satisfy predicate.
function partition(array, predicate) {
	var input = array;
	var pass = [];
	var fail = [];

	if (!Array.isArray(input)) {
		return;
	}

	input.forEach(function(element) {
		(predicate(element) ? pass : fail).push(element);
	})

	return [pass, fail];
}

//union(*arrays) 
//Computes the union of the passed-in arrays: 
//the list of unique items, in order, that are present in one or more of the arrays.
function union(array) {
	var arrays = Array.prototype.slice.call(arguments);

	for(var i = 0; i < arrays.length; i++) {
		if (!Array.isArray(arrays[i])) {
			return;
		}
	}

	var output = arrays[0];

	var _comparator = function(element) {
		for(var i = 0; i < output.length; i++) {
			if(element === output[i]) {
				return true;
			}
		}

		return false;
	}

	for(var i = 1; i < arrays.length; i++) {
		for (var j = 0; j < arrays[i].length; j++) {
			if(!_comparator(arrays[i][j])) {
				output.push(arrays[i][j]);
			}
		}
	}

	return output;

}

//intersection(*arrays)
//Computes the list of values that are the intersection of all the arrays. 
//Each value in the result is present in each of the arrays.
function intersection(array) {
	var arrays = Array.prototype.slice.call(arguments);

	for(var i = 0; i < arrays.length; i++) {
		if (!Array.isArray(arrays[i])) {
			return;
		}
	}

	var output = arrays[0];

	var _comparator = function(element, arrayToCompare) {
		for(var i = 0; i < arrayToCompare.length; i++) {
			if(element === arrayToCompare[i]) {
				return true;
			}
		}

		return false;
	}

	for(var i = 1; i < arrays.length; i++) {
		for (var j = 0; j < output.length; j++) {
			if(!_comparator(output[j], arrays[i])) {
				output = without(output, output[j]);
			}
		}
	}

	return output;

}

//difference(array, *others) 
//Similar to without, but returns the values from array that are not present in the other arrays.
function difference(array, others) {
	var arrays = Array.prototype.slice.call(arguments);
	var first = arrays[0];

	for(var i = 0; i < arrays.length; i++) {
		if (!Array.isArray(arrays[i])) {
			return;
		}
	}

	var output = [];

	var _comparator = function(element, arrayToCompare) {
		for(var i = 0; i < arrayToCompare.length; i++) {
			if(element === arrayToCompare[i]) {
				return true;
			}
		}

		return false;
	}

	for(var i = 1; i < arrays.length; i++) {
		for (var j = 0; j < first.length; j++) {
			if(!_comparator(first[j], arrays[i])) {
				output.push(first[j]);
			}
		}
	}

	return output;

}

//uniq(array)
//Produces a duplicate-free version of the array, using === to test object equality. 
function uniq(array, isSorted, iterator) {

	var input = array;
	var output = [];

	var _comparator = function(element, arrayToCompare) {
		for(var i = 0; i < arrayToCompare.length; i++) {
			if(element === arrayToCompare[i]) {
				return true;
			}
		}

		return false;
	}	

	for(var i = 0; i < input.length; i++) {
		if(!_comparator(input[i], output)) {
			output.push(input[i]);
		}
	}

	return output;
}

//zip(*arrays) 
//Merges together the values of each of the arrays with the values at the corresponding position. 
function zip(array) {
	var arrays = Array.prototype.slice.call(arguments);
	var numFields = arrays[0].length;
	var output = [];

	for(var i = 0; i < arrays.length; i++) {
		for(var j = 0; j < numFields; j++) {
			if(!Array.isArray(output[j])) {
				output[j] = [];
			}
			output[j][i] = arrays[i][j];
		}
	}

	return output;
}

//object(list, [values]) 
//Converts arrays into objects. Pass either a single list of [key, value] pairs, or a list of keys, and a list of values. 
//If duplicate keys exist, the last value wins.
function object(list, values) {
	console.log(arguments);
	var values = Array.prototype.slice.call(arguments, 1);
	var zipped;
	var output = {};
	var key;
	var value;

	//if only a single list of key-value pairs is provided
	if(!values.length) {
		for(var i = 0; i < list.length; i++) {
			key = list[i][0];
			value = list[i][1];
			output[key] = value;
		}
	} else {
		zipped = zip(arguments[0], arguments[1][0]);
		output = object(zipped);
	}

	return output;
}

//indexOf(array, value)
//Returns the index at which value can be found in the array, or -1 if value is not present in the array. 
//Uses the native indexOf function unless it's missing.
function indexOf(array, value) {
	return array.indexOf(value);
}

//lastIndexOf(array, value, [fromIndex]) 
//Returns the index of the last occurrence of value in the array, or -1 if value is not present. 
//Uses the native lastIndexOf function if possible. 
//Pass fromIndex to start your search at a given index.
function lastIndexOf(array, value, fromIndex) {
	if(!fromIndex) {
		return array.lastIndexOf(value);
	} else {
		return array.lastIndexOf(value, fromIndex);
	}
}

//sortedIndex(list, value, [iterator]) 
//Determines the index at which the value should be inserted into the list in order to maintain the list's sorted order. 
//If an iterator function is provided, it will be used to compute the sort ranking of each value, including the value you pass. 
function sortedIndex(array, obj, iterator, context) {
	var low = 0;
	var high = array.length;
	var value = iterator ? obj[iterator] : obj;

	while (low < high) {
		var mid = Math.round( (low + high) / 2) - 1;
		var midValue = iterator ? array[mid][iterator] : array[mid];
		midValue < value ? low =  mid + 1 : high = mid;
	}

	return low;
}

//range([start], stop, [step]) 
//Returns a list of integers from start to stop, incremented (or decremented) by step, exclusive. 
function range(start, stop, step) {
	var args = Array.prototype.slice.call(arguments);
	var start = undefined;
	var stop = undefined;
	var step = undefined;
	var output = [];

	switch(args.length) {
		case 1:
		stop = args[0];
		break;
		case 2:
		start = args[0];
		stop = args[1];
		break;
		case 3:
		start = args[0];
		stop = args[1];
		step = args[2];
	}

	if(stop > start) {
		for(var i = start ? start : 0; i < stop; i = step ? i + step : i + 1) {
			output.push(i);
		}
	} else {
		for(var i = start ? start : 0; i > stop; i = step ? i - step : i - 1) {
			output.push(i);
		}
	}


	return output;
}



