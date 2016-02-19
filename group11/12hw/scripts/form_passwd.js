function formChecker(sSelector) {
	//-------------
	var f = this;


	//Методы
	f.check = function(event) {
		// event.preventDefault(); // выключаем событие по-умолчанию
		var passwd_state = 0,
			currentPasswd = $('.b-form__passwd1').val(),
			strongMark = settings.get('strongMark'),
			err_pass = settings.get('err_pass');
			pass_mess = '';

		for (var i = 0; i < 4; i++) {
			if (currentPasswd.match(strongMark[i])) {
				console.log(err_pass[i])
				// pass_mess = err_pass[i];
			} 
			};
		
				// pass_mess = 'Введите пароль..';

		
		// console.log(pass_mess);
		// f.errorMessage.stop()[slideToggle]();
	}

	f.main = function() {
			// alert(sSelector)
			f.init(sSelector);

			//Свойства
			f.textFields = f.find('.b-textfield');
			


			//События
			// f.elem.submit(f.check); // evem - взято з components - родительское свойство
			f.elem.focus().keydown(f.check);

		}
		//-------------
	$(document).ready(f.main);

}



formChecker.prototype = new Component();