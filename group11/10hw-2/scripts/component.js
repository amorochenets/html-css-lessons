function Component() {
	this.elem = null; //$(sSelector)
	
	//метод для иницивлизации главного свойства this.elem
	this.init = function(sSelector) {
		this.elem = $(sSelector);
		if (!this.elem.length) {
			alert('Can\'n access element by selector: ' + sSelector);
		};
	};
	this.find = function(sProp) {
		var find_result = this.elem.find(sProp);
		if (find_result.length) {
			return find_result;
		} else alert('Can\'n access element by selector: ' + sProp);
		
	};
};
