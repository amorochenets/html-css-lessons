var result = 0;

document.getElementById('result').innerHTML = '';
function recurs(num1) {
	result += num1;
	if (num1 > 0) {
		return recurs(num1 - 1);
	} else return result;

}

document.getElementById('result').innerHTML = recurs(100);

