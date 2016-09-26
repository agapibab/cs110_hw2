const factorial = function (number) {
	if (number < 0) {
		return NaN;
	}
	else if (number === 0) {
		return 1;
	}
	else {
		return (number * factorial(number - 1));
	}
}