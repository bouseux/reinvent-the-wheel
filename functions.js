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
	methods.forEach(function(method) {
		if(typeof method !== 'function') {
			return;
		} else {
			bind(method, obj);
		}
	})



}