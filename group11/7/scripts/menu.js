function Menu(sSelector) {
	var m = this;
	//-----
	m.menu = $(sSelector);
	m.menuItem = m.menu.find('.b-menu__item');
	//-----

	m.showSubmenu = function() {
		//когда срабатывает, цепляет елемент который инициализировал событие
		$(this).children('.b-submenu').stop().slideDown();
	};
	m.hideSubmenu = function() {
		$(this).children('.b-submenu').stop().slideUp();
	};

	//-----
	m.menuItem.mouseover(m.showSubmenu);
	m.menuItem.mouseout(m.hideSubmenu);
}