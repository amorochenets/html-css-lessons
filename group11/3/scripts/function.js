// function calcSum(iNum1, iNum2) {
// 	return parseInt(iNum1) + parseInt(iNum2);
// }
// console.log(calcSum(4, '6f'));


// function triangleArea(fBase, fHight) {
// 	return parseFloat(fBase) * parseFloat(fHight) / 2;
// }
// var hight = '27 mm',
// 	base = '35 mm';
// console.log('Triangle with base = ' + base + ' and hight = ' + hight + ' hase ares = ', triangleArea(base, hight) + ' mm');


// function maxInArray(aNums) {
// 	var max = aNums[0];
// 	for (var i = 1; i < aNums.length; i++) {
// 		if (max < aNums[i])
// 			max = aNums[i];
// 	}
// 	return max;
// }

// var nums = [3, 5, 78, -79, 4, 24, 1];
// console.log('Max number in array is ', maxInArray(nums));


// console.log(getCalories('Каша гречневая', 200));


// Виды спотра - калории за время("бег" : 50ккал/мин... ), вывести результат как можно их потратить

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

function doSport(calories) {
	var sportData = {
			'Балет': 400,
			'Велоспорт': 660,
			'Катание на роликах': 350,
			'Фехтование': 300,
			'Гребля': 840,
			'Боулинг': 250
		},
		result = 'Вы получили ' + calories + ' ккал.\n'
	for (var sportType in sportData) {
		if (sportData[sportType] - calories < 30 && sportData[sportType] - calories > -30) {
			result += 'Вы можете позаниматся 1 час - ' + sportType + '\n';
		} else if (sportData[sportType] / 2 - calories < 30 && sportData[sportType] / 2 - calories > -30) {
			result += 'Вы можете позаниматся 30 мин - ' + sportType + '\n';
		} else if (sportData[sportType] / 4 - calories < 30 && sportData[sportType] / 4 - calories > -30) {
			result += 'Вы можете позаниматся 15 мин - ' + sportType + '\n';
		} else if (sportData[sportType] * 2 - calories < 30 && sportData[sportType] * 2 - calories > -30) {
			result += 'Вы можете позаниматся 2 часа - ' + sportType + '\n';
		} else if (sportData[sportType] * 3 - calories < 50 && sportData[sportType] * 3 - calories > -50) {
			result += 'Вы можете позаниматся 3 часа - ' + sportType + '\n';
		};
	}
	return result;
}

console.log(doSport(getCalories('Блины с творогом', 210)));