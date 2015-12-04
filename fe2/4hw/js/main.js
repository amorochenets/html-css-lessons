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
		}
	} else if (female.checked) {
		if (parseInt(bangleLenght.value) < 15) {
			astenic.style.display = 'block';
		} else if (parseInt(bangleLenght.value) >= 15 && parseInt(bangleLenght.value) <= 17) {
			normstenic.style.display = 'block';
		} else if (parseInt(bangleLenght.value) > 17) {
			gyperstenic.style.display = 'block';

		}
	} else alert('Укажите ваш пол.');
}

function calcOptimalWeight() {
	var male1 = document.getElementById('male1'),
		female1 = document.getElementById('female1'),
		bodyType = document.getElementById('bodyType'),
		weight = document.getElementById('weight'),
		age = document.getElementById('age'),
		height = document.getElementById('height'),
		idealWeight = 0,
		bodyWeightIndex = 0;

	if (parseInt(age.value) < 40) {
		idealWeight = height.value - 110;
	} else {
		idealWeight = height.value - 100;
	}

	if (bodyType.value == 'astenic1') {
		idealWeight = idealWeight * 0.9;
	} else if (bodyType.value == 'gyperstenic1') {
		idealWeight = idealWeight * 1.1;
	};
	bodyWeightIndex = parseInt(weight.value) / ((parseInt(height.value) / 100) * (parseInt(height.value) / 100));
	bodyWeightIndex = bodyWeightIndex.toFixed(2);

	document.getElementById("idealWeight").innerHTML = 'Ваш идеальный вес составляет ' + idealWeight + 'кг.';
	document.getElementById("bodyWeightIndex").innerHTML = "Индекс массы вашего тела: " + bodyWeightIndex;

	if (female1.checked) {
		if (bodyWeightIndex < 19) {
			document.getElementById("bodyWeightIndex").innerHTML = 'У вас дефицит массы тела.';
		} else if (bodyWeightIndex >= 19 && bodyWeightIndex <= 24) {
			document.getElementById("bodyWeightIndex").innerHTML = 'Масса вашего тела в норме.';
		} else if (bodyWeightIndex > 24 && bodyWeightIndex < 25) {
			document.getElementById("bodyWeightIndex").innerHTML = 'У вас незначительный избыток массы тела.';
		} else {
			document.getElementById("bodyWeightIndex").innerHTML = 'У вас избыток массы тела.';
		}
	} else if (male1.checked) {
		if (bodyWeightIndex < 19) {
			document.getElementById("bodyWeightIndex").innerHTML = 'У вас дефицит массы тела.';
		} else if (bodyWeightIndex >= 19 && bodyWeightIndex <= 25) {
			document.getElementById("bodyWeightIndex").innerHTML = 'Масса вашего тела в норме.';
		} else if (bodyWeightIndex > 25 && bodyWeightIndex < 26) {
			document.getElementById("bodyWeightIndex").innerHTML = 'У вас незначительный избыток массы тела.';
		} else {
			document.getElementById("bodyWeightIndex").innerHTML = 'У вас избыток массы тела.';
		}

	}
}