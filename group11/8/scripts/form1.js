function Form(sSelectopr) {
	var f = this;

	//секция данных
	f.form = $(sSelectopr); // получаем фому
	f.name = f.form.find('.b-form__name');
	f.surname = f.form.find('.b-form__surname');
	f.seasons = f.form.find('.b-form__season');
	f.fruit = f.form.find('.b-form__fruit');
	f.animal = f.form.find('.b-form__animals');
	f.review = f.form.find('.b-form__review');

	//секчия логики
	//метод для считывания и отображения данных формы
	f.showInfo = function() {



		alert('Форма: ' + '\n' + f.name.val() + '\n' + f.surname.val() + '\n' + f.fruit.filter(':checked').val() + '\n' + f.animal.val() + '\n' + f.review.val());

		alert('Форма: ' 
			+ '\n' + f.val(f.name) 
			+ '\n' + f.val(f.surname) 
			+ '\n' + f.val(f.fruit.filter(':checked')) 
			+ '\n' + f.val(f.animal) 
			+ '\n' + f.val(f.seasons.filter(':checked')) 
			+ '\n' + f.val(f.review));

	
	};

	f.val = function(oJqElem) {
		var type = oJqElem.attr('type'), //тип элемента управления
			tagName = oJqElem.prop('tagName');
		if (type == 'radio' || type == 'text' || type == 'file' || type =='password' || tagName == 'OPTION' || tagName == 'TEXTAREA' || tagName == 'SELECT') {
			return oJqElem.val();
		} else if (type == 'checkbox') {
			var checkboxVals = '';
			oJqElem.each(function() {
				var checkboxVal = $(this);
				checkboxVals += checkboxVal.val() + ' ';
			});
			return checkboxVals;
		} else {
			alert('Нет значения!');
		};
	};

	// var students = {
	// 	'Petrov': 5,
	// 	'Ivanov': 4,
	// 	'Sidorov': 3
	// }

	// $.each(students, function(name, mark) {
	// 	console.log(name + ' - '+ mark);
	// });

	//секция представления (событий)
	f.form.find('.b-form__ok-button').click(f.showInfo);

}