//create a hidden number

var number = 4;

//ask user for guess

var userInput = prompt("Guess a number");

//check guess

if(userInput == number) {
	alert("you are correct");
} else if(userInput < number) {
	alert("higher");
} else {
	alert("lower");
}

