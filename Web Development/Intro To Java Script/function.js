
//checks if even or not
function isEven(num) {
	// if(num % 2 === 0) {
	// 	return true;
	// } else {
	// 	return false;
	// }

	return num % 2 === 0;
}

//factorial function

function factorial(num) {
	var fact = 1;
	for(var i = num; i > 0; i--) {
		fact *= i;
	}
	return fact;
}

//replaces - to _

function kebabToSnake(str) {


	var new_str = str.replace(/-/g, "_");

	// /-/g replaces all - in string with whatever you want

	return new_str;

}