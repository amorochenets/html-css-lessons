var arrayValue = [3, 5, 7, 9, 4, 0, 12, 1];

function reverseArrayInPlace(aValue) {
	for (var i = 0; i < aValue.length / 2; i++) {
		var temp = aValue[i];
		aValue[i] = aValue[aValue.length - 1 - i];
		aValue[aValue.length - 1 - i] = temp;
	}
	return aValue;
}

reverseArrayInPlace(arrayValue);
console.log(arrayValue);