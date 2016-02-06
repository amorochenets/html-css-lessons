var sum = 9000,
	notFirstCourse = true,
	payThreeMonth = true,
	discount = 0,
	totalSum = 0;

if (notFirstCourse && payThreeMonth) {
	discount = 15;
} else if (notFirstCourse) {
	discount = 10;
} else if (payThreeMonth) {
	discount = 5;
};

totalSum = sum - sum * discount / 100;
console.log('Your discount is ', discount, '%. You need to pay ', totalSum, 'UAH');