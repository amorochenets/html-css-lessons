var str = 'It\'s javaScript';

console.log(str.charAt(2));

//метод не включает последний символ
console.log(str.slice(0, 9)); // It's java

console.log(str.split(' ')); // ' ' - разделитель

console.log(str.substr(5, 10)); // javaScript

console.log(str.substring(0, 9).toUpperCase()); // как slice, но включается последний символ

var carPlate = 'AA 1234 BB',
	plateNum = carPlate.substr(carPlate.indexOf(' ') + 1, 4);

console.log(plateNum);

//----------------------------------------

function translit() {
	var message = document.getElementById('message'),
		newMessage = document.getElementById('newMessage'),
		symbols = {
			'а': 'a',
			'б': 'b',
			'в': 'v',
			'г': 'g',
			'д': 'd',
			'е': 'e',
			'ё': 'e',
			'ж': 'zh',
			'з': 'z',
			'и': 'i',
			'й': 'j',
			'к': 'k',
			'л': 'l',
			'м': 'm',
			'н': 'n',
			'о': 'o',
			'п': 'p',
			'р': 'r',
			'с': 's',
			'т': 't',
			'у': 'u',
			'ф': 'f',
			'х': 'h',
			'ц': 'c',
			'ч': 'ch',
			'ш': 'sh',
			'щ': 'sch',
			'ы': 'y',
			'э': 'e',
			'ю': 'yu',
			'я': 'ya'
		};
		newMessage.innerHTML = '';
	for (var i = 0; i < message.value.length; i++) {
		newMessage.innerHTML += symbols[message.value.charAt(i)] ? symbols[message.value.charAt(i)] : message.value.charAt(i);
	};
}

var btn = document.getElementById('btn');

btn.onclick = translit; //назначаем на кнопку фунцию