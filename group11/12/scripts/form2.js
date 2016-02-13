function formChecker(sSelector) {
	//-------------
	var f = this;


	//Методы
	f.check = function(event) {
		event.preventDefault(); // выключаем событие по-умолчанию
		var form_error = false,
			regexps = settings.get('regexps');
		f.textFields.each(function() {

			var textField = $(this);
			console.log(textField.attr('name'));
			var re = new RegExp(regexps[textField.attr('name')])
			,
				textfield_error = !textField.val().match(re);
			textField.toggleClass('b-textfield_error', textfield_error);
			if (textfield_error) {
				form_error = true;
			};
			slideToggle = form_error ? 'slideDown' : 'slideUp';
		});
		f.errorMessage.stop()[slideToggle]();
	}

	f.main = function() {
			// alert(sSelector)
			f.init(sSelector);

			//Свойства
			f.textFields = f.find('.b-textfield');
			f.errorMessage = f.find('.b-form__message_error');


			//События
			f.elem.submit(f.check); // evel - взято з components - родительское свойство

		}
		//-------------
	$(document).ready(f.main);

}



formChecker.prototype = new Component();