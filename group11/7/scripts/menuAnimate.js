function Menu(sSelector) {
	var m = this;
	//-----
	m.menu = $(sSelector);
	m.menuItem = m.menu.find('.b-menu__item');
	//-----

	m.showSubmenu = function() {
		//когда срабатывает, цепляет елемент который инициализировал событие
		$(this).children('.b-submenu')
			.stop()
			.css({
				'display': 'block'
			})
			.animate({
				'opacity': 1
			}, 600);
	};
	m.hideSubmenu = function() {
		$(this).children('.b-submenu')
			.stop()
			.animate({
				'opacity': 0
			}, 600, function() {
				$(this).css({
					'display': 'none'
				})
			});
	};

	//-----
	m.menuItem.mouseover(m.showSubmenu);
	m.menuItem.mouseout(m.hideSubmenu);
}