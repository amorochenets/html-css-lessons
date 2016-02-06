//function-class
function User(sSelector) { // первая буква (s) - тип данных, дальше селектор CSS
	var u = this;

	//свойства
	u.userData = $(sSelector); // форма
	u.name = u.userData.children('.name');
	//методы
	u.showUserData = function() {
		console.log('Hello, ' + u.name.val() + '!');
	};

	//события
	u.userData.children('.okBtn').click(u.showUserData);

}