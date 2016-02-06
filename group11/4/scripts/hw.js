function metabolism(gender, weight, age) {
	var k = {
			'male': {
				17: [17.5, 651],
				29: [15.3, 679],
				60: [11.6, 879],
				100: [13.5, 487]
			},
			'female': {
				17: [12.2, 746],
				29: [14.7, 496],
				60: [18.7, 829],
				100: [10.5, 596]
			}
		},
		result = 0;

	if (age > 10 && age <= 17) {
		age = 17;
	} else if (age > 17 && age <= 29) {
		age = 29;
	} else if (age > 29 && age <= 60) {
		age = 60;
	} else if (age > 29 && age <= 100) {
		age = 100;
	} else {
		alert('Формула работает для возраста от 10 лет');
	}
	if (age > 10) {
		result = k[gender][age][0] * weight + k[gender][age][1];
	}
	return result;
}


console.log(metabolism('male', 89, 25));