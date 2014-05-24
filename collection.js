//each(list, iterator, [context])
//Iterates over a list of elements, yielding each in turn to an iterator function.
function each(list, iterator) {
	var context = arguments[2];

	//if list is an array
	for(var i = 0; i < list.length; i++) {
		iterator.call(context, list[i], i, list);
	}

	//if list is an object
	for(var key in list) {
		iterator.call(context, list[key], key, list);
	}
}

//map(list, iterator, [context])
//Produces a new array of values by mapping each value in list through a transformation function (iterator).
function map(list, iterator, context) {
	var output = [];
	each(list, function(value, index, obj) {
		output.push(iterator.call(context, value, index, obj));
	})

	return output;
}