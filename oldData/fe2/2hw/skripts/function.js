function calcSum(iNum1, iNum2) {
	return parseInt(iNum1) + parseInt(iNum2);
}
console.log(calcSum(4, '6f'));


function triangleArea(fBase, fHight) {
	return parseFloat(fBase) * parseFloat(fHight) / 2;
}
var hight = '27 mm',
	base = '35 mm';
console.log('Triangle with base = ' + base + ' and hight = ' + hight + ' hase ares = ', triangleArea(base, hight) + ' mm');


function maxInArray(aNums) {
	var max = aNums[0];
	for (var i = 1; i < aNums.length; i++) {
		if (max < aNums[i])
			max = aNums[i];
	}
	return max;
}

var nums = [3, 5, 78, -79, 4, 24, 1];
console.log('Max number in array is ', maxInArray(nums));

function getCalories(food, weight) {
	var foodData = {
			'Омлет': 250,
			'Каша гречневая': 197,
			'Блины с творогом': 195,
			'Биточки говяжьи': 235
		},
		calories = 0;

	calories = foodData[food] * weight / 100;
	return calories;
}

console.log(getCalories('Омлет', 300));


// Виды спотра - калории за время("бег" : 50ккал/мин... ), вывести результат как можно их потратить

function doSport(calories) {
	var sportData = {
		'Балет': 400,
		'Велоспорт': 660,
		'Катание на роликах': 350,
		'Фехтование': 300,
		'Фехтование': 840,
		'Боулинг': 250
	}

	for(variable in object){
		statements
	}
}