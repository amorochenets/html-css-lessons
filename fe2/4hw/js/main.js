function calcBodyType() {
	var male = document.getElementById('male'),
		female = document.getElementById('female'),
		bangleLenght = document.getElementById('bangleLenght'),
		astenic = document.getElementById('astenic'),
		normstenic = document.getElementById('normstenic'),
		gyperstenic = document.getElementById('gyperstenic');

		astenic.style.display = 'none';
		normstenic.style.display = 'none';
		gyperstenic.style.display = 'none';

	if (male.checked) {
		if (parseInt(bangleLenght.value) < 18) {
			astenic.style.display = 'block';
		} else if (parseInt(bangleLenght.value) >= 18 && parseInt(bangleLenght.value) <= 20) {
			normstenic.style.display = 'block';
		} else if (parseInt(bangleLenght.value) > 20) {
			gyperstenic.style.display = 'block';
		};
	} else if (female.checked) {
		if (parseInt(bangleLenght.value) < 15) {
			astenic.style.display = 'block';
		} else if (parseInt(bangleLenght.value) >= 15 && parseInt(bangleLenght.value) <= 17) {
			normstenic.style.display = 'block';
		} else if (parseInt(bangleLenght.value) > 17) {
			gyperstenic.style.display = 'block';

		};
	} else alert('Укажите ваш пол.');
}

function calcOptimalWeight() {
	var male = document.getElementById('male'),
		female = document.getElementById('female'),
		bodyType = document.getElementById('bodyTypes'),


}