function Menu(sSelector) {
	var m = this;
	//-----
	m.menu = $(sSelector);
	m.menuItem = m.menu.find('.b-menu__item');
	//-----

	m.toggleMenu = function(oSubmenu) {
		oSubmenu.stop().slideToggle();
	};

	m.showSubmenu = function() {
		m.toggleMenu($(this).children('.b-submenu'))
	};
	m.hideSubmenu = function() {
		m.toggleMenu($(this).children('.b-submenu'))
	};

	//-----
	m.menuItem.mouseover(m.showSubmenu).mouseout(m.hideSubmenu);

}