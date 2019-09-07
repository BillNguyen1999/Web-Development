console.log("connected");
var todo = [];
var input = prompt("what would you like to do");

function display(list) {
	console.log("***********");
	for(var i = 0; i < list.length; i++) {
		console.log(i + ": " + list[i]);
	}
	console.log("***********");
}

while(input.toUpperCase() != "QUIT") {

	if(input.toUpperCase() == "NEW") {
		//created a new variable to prevent low frequency erros
		var p = prompt("enter new tools");
		todo.push(p);
		console.log(p + " has been added to the list");
		//input = prompt("what would you like to do");
	} else if(input.toUpperCase() == "LIST") {
		display(todo);
		//input = prompt("what would you like to do");
	} else if(input.toUpperCase() == "DELETE") {
		var index = prompt("what index do you want to delete?");
		var temp = [];
		for(var i = 0; i < todo.length; i++) {
			if(i != index) {
				temp.push(todo[i]);
			}
		}
		if(index >= todo.length) {
			console.log("not correct number for index");
		} else {
			console.log("todo removed");
		}
		todo = temp;
	}

	input = prompt("what would you like to do");
}

console.log("you quit");

//below is practice using forEach method

// function sum(arr) {
// 	var total = 0;
// 	arr.forEach(function(t) {
// 		total += t;
// 	});

// 	return total;
// }