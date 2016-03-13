function calculator() {

	var num1 = document.getElementById('num1'), // object is text field
		num2 = document.getElementById('num2'),
		operators = document.getElementById('operators'),
		result = document.getElementById('result'),
		operatorNum = operators.selectedIndex; //свойство выпадающего списка, которое хранить номер выбраной опции (с нуля)

	// alert(num1.value + ' ' + operators.value + ' ' + num2.value	+ ' ' + operatorNum)
	num2.style.background = '#fff';
	if (operators.value == '+') {
		result.value = (+num1.value) + (+num2.value); //приведение к числу
	} else if (operators.value == '-') {
		result.value = num1.value - num2.value;
	} else if (operators.value == '*') {
		result.value = num1.value * num2.value;
	} else if (operators.value == '/') {
		if (num2.value != 0) {
			result.value = num1.value / num2.value;
		} else {
			alert('Делить на 0 нельзя')
			num2.style.background = '#ff0000';
		};
	} else if (operators.value == 'sqrt') {
		result.value = Math.sqrt(num1.value);
	} else if (operators.value == 'pow') {
		result.value = Math.pow(num1.value, num2.value);
	}
}

console.log(Math.floor(Math.random() * (20 - 10 + 1)) + 10);
