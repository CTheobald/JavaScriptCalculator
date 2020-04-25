var firstNumber = prompt("Please enter the first number:");

var operation = prompt("Which operation do you need? Enter + - * / ");

var secondNumber = prompt("Please enter the second number:");

switch (operation) {
	case "+":
		var operationString = "sum";
		var result = Number(firstNumber) + Number(secondNumber);
		if (isNaN(result)) {
			alert("You did not enter valid input.");
		} else {
			alert("The " + operationString + " of " + firstNumber + " and " + secondNumber + " equals: " + result);
		}
		break;
	case "-":
		var operationString = "difference";
		var result = Number(firstNumber) - Number(secondNumber);
		if (isNaN(result)) {
			alert("You did not enter valid input.");
		} else {
			alert("The " + operationString + " of " + firstNumber + " and " + secondNumber + " equals: " + result);
		}
		break;
	case "*":
		var operationString = "product";
		var result = Number(firstNumber) * Number(secondNumber);
		if (isNaN(result)) {
			alert("You did not enter valid input.");
		} else {
			alert("The " + operationString + " of " + firstNumber + " and " + secondNumber + " equals: " + result);
		}
		break;
	case "/":
		var operationString = "quotient";
		var result = Number(firstNumber) / Number(secondNumber);
		if (isNaN(result)) {
			alert("You did not enter valid input.");
		} else {
			alert("The " + operationString + " of " + firstNumber + " and " + secondNumber + " equals: " + result);
		}
		break;
	default:
		alert("You did not enter valid input.");
		break;

}


