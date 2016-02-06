function Calculator(sSelector) {
	var c = this;

	//свойства
	c.calcForm = $(sSelector);
	c.num1 = c.calcForm.children('.num1');
	c.num2 = c.calcForm.children('.num2');
	c.operator = c.calcForm.find('.operator');
	c.result = c.calcForm.children('.result');
	c.calcBtn = c.calcForm.children('.calc_btn');

	//методы
	c.calculate = function() {
		var operator = c.operator.filter(':selected').val();
		if (operator == '+') {
			c.result.val((+c.num1.val()) + (+c.num2.val()));
		} else if (operator == '-') {
			c.result.val(c.num1.val() - c.num2.val());
		} else if (operator == '/') {
			if (c.num2.val() != 0) {
				c.result.val(c.num1.val() / c.num2.val());
			} else alert('Делить на 0 нельзя')
		} else if (operator == '*') {
			c.result.val(c.num1.val() * c.num2.val());
		}
	}

	//события
	c.calcBtn.click(c.calculate);
}