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



