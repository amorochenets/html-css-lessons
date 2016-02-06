var goods = {
		'диван': 6000,
		'стул': 800,
		'стол': 3000,
		'шкаф': 8000,
		'комод': 2500
	},
	students = {
		'12345': {
			'name': 'Mardarita',
			'birthday': '18.08.1986',
			'mark': 5
		},
		'67890': {
			'name': 'Alexey',
			'birthday': '20.11.1986',
			'mark': 5
		},
		'35792': {
			'name': 'Rodion',
			'birthday': '02.04.1986',
			'mark': 5
		}

	},

	title,
	result = '',
	counter = 0;

// for (title in goods) {
// 	console.log(title + ' - ' + goods[title] + ' UAH');
// };
// console.log('-------------------');
// for (title in goods) {
// 	if (counter == 1) {
// 		console.log(title + ' - ' + goods[title] + ' UAH');
// 		break;
// 	};
// 	counter++;
// };
// console.log('-------------------');
// for (title in goods) {
// 	if (goods[title] >= 6000) {
// 		console.log(title + ' - ' + goods[title] + ' UAH');
// 	};
// };

console.log(students['12345']['name']);

console.log('------');

for (var id in students) {
	var studLine = '';
	for (var studentData in students[id]) {
		studLine += students[id][studentData] + ' ';
	}
	console.log(studLine + '\n');
}


var goods = {
	'4351114': {
		'name': 'iPad',
		'price': 452,
		'massa': '0.1kg'
	},
	'5674345': {
		'name': 'iPhone',
		'price': 1256,
		'massa': '0.2kg'
	},
	'8796423': {
		'name': 'MacBook',
		'price': 3532,
		'massa': '2.2kg'
	}
};
console.log('------');
for (var id in goods) {
	var results = '';
	for (var goodsData in goods[id]) {
		results += goods[id][goodsData] + ' ';
	}
	console.log(results);
}