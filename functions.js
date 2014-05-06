//bind(function, object, *arguments)
//Bind a function to an object, meaning that whenever the function is called, the value of this will be the object. 
//Optionally, pass arguments to the function to pre-fill them, also known as partial application.
function bind(func, object, parameters) {
	// var args = parameters ? Array.prototype.slice.call(parameters) : [];
	func.call(object, parameters);
}

//bindAll(object, *methodNames)
//Binds a number of methods on the object, specified by methodNames, 
//to be run in the context of that object whenever they are invoked. 
function bindAll(obj) {
	var methods = Array.prototype.slice.call(arguments, 1);
	if(methods.length === 0) { return; }

	methods.forEach(function(method) {
		obj[method] = bind(obj[method], obj);
	})

	return obj;
}

//partial(function, *arguments) 
//Partially apply a function by filling in any number of its arguments, without changing its dynamic this value. 
function partial(func) {
	var args = Array.prototype.slice.call(arguments, 1);
	var funcPartial = function() {
		return func.apply(this, args.concat(Array.prototype.slice.call(arguments)));
	}

	return funcPartial;
}

//memoize(function)
//Memoizes a given function by caching the computed result.
function memoize(func) {
	var memo = {};
	return function() {
		var key = arguments;
		return memo[key] ? memo[key] : (memo[key] = func.apply(this, arguments));
	};
}

//delay(function, wait, *arguments)
//Much like setTimeout, invokes function after wait milliseconds. 
//If you pass the optional arguments, they will be forwarded on to the function when it is invoked.
function delay(func, wait) {
	var args = Array.prototype.slice.call(arguments, 2);

	return setTimeout(function() {
		return func.apply(null, args);
	}, wait);
}

//defer(function, *arguments) 
//Defers invoking the function until the current call stack has cleared, similar to using setTimeout with a delay of 0.
function defer(func) {
	var args = Array.prototype.slice.call(arguments, 1);
	delay.apply(null, [func, 0].concat(args));
}

//throttle(function, wait) 
//Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly, will only actually call the original function at most once per every wait milliseconds. 
//Useful for rate-limiting events that occur faster than you can keep up with.
function throttle(func, wait) {
	var previous = 0;
	var args;
	var timeout = null;

	return function() {
		var now = Date.now();
		var remaining = wait - (now - previous);
		var args = arguments;
		if(!previous) {
			return func.apply(null, args);
		} else if(remaining <= 0) {
			clearTimeout(timeout);
			previous = now;
			return func.apply(null, args);
		} else {
			timeout = setTimeout(function() {
				return func.apply(null, args);
			}, remaining);
		}
	}
}

//debounce(function, wait, [immediate]) 
//Creates and returns a new debounced version of the passed function which will postpone its execution 
//until after wait milliseconds have elapsed since the last time it was invoked. 
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//once(function)
//Creates a version of the function that can only be called one time.
function once(func) {
	var called = false;
	var result;

	return function() {
		if(!called) {
			called = true;
			result = func.apply(this, arguments);
		}

		return result;
	}
}

 //after(count, function)
//Creates a version of the function that will only be run after first being called count times.
function after(count, func) {
	var run = 0;
	return function() {
		run++;

		if(run === count) {
			return func.apply(this, arguments);
		}
	}
}

//OR: underscore.js version
function after(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
};

function now() {
	return Date.now() || function() { return new Date().getTime(); };
}













