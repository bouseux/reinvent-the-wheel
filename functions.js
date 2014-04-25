//bind(function, object, *arguments)
//Bind a function to an object, meaning that whenever the function is called, the value of this will be the object. 
//Optionally, pass arguments to the function to pre-fill them, also known as partial application.
function bind(func, object, parameters) {
	// var args = parameters ? Array.prototype.slice.call(parameters) : [];
	func.call(object, parameters);
}