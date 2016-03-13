function getBirthday() {
	var currentDate = new Date().getMonth() + 1,
		listOfBirthday = {
			'01': {
				'23': 'Alex',
				'11': 'Mike'
			},
			'12': {
				'16': 'Ann',
				'18': 'July'
			}
		},

		curentBirthday = '';

	for (var x in listOfBirthday[currentDate]) {
		curentBirthday += '<br>' + listOfBirthday[currentDate][x] + ', ' + x + '-го числа';
	}
	return curentBirthday;
}
var message = 'В этом месяце дни рожения у:';
// getBirthday();
document.getElementById('friendsBorthday').innerHTML = message + getBirthday();