var numbersArray = [3, 5, 6, 1, 7, 0, 8, -5, -3, -2, 4, 5, 9, 7, 0, 6, 0, -6,-11, -4, 1, 2, 3, -5, -9, -7, -6, 2, 5, 8, 0, 8, 0, 4, -1, -3, -3],
	zeroCounter = 0,
	resultNegative = '',
	resultPositive = '',
	resultNegativeOdd = '',
	average = 0,
	sum = 0,
	maxNumberInArray = numbersArray[0];

for (var i = 0; i < numbersArray.length; i++) {
	if (numbersArray[i] < 0) {
		resultNegative += numbersArray[i] + ' ';
	};
	if (numbersArray[i] % 2 == -1 && numbersArray[i] < -5) {
		resultNegativeOdd += numbersArray[i] + ' '
	};
	if (numbersArray[i] === 0) {
		zeroCounter++;
	};
	if (maxNumberInArray < numbersArray[i]) {
		maxNumberInArray = numbersArray[i];
	};
	sum += numbersArray[i];
};

for (var i = numbersArray.length - 1; i >= 0; i--) {
	if (numbersArray[i] > 0) {
		resultPositive += numbersArray[i] + ' ';
	};
};
average = sum / numbersArray.length;
console.log('Negative numbers is: ', resultNegative);
console.log('Positive numbers \(Reverse\): ', resultPositive);
console.log('Odd negative numbers < -5: ', resultNegativeOdd);
console.log('Count of zero: ', zeroCounter);
console.log('Average: ', average);
console.log('Max number in array is: ', maxNumberInArray);