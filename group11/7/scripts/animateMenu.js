function Menu(sSelector){
	var m = this;

 //свойства
	m.menu = $(sSelector); //форма
	m.menuItem = m.menu.find(".b-menu__item");
	
	
	//методы
	m.showSubmenu = function(){
		//$(this).children(".b-submenu").show();
		$(this).children(".b-submenu").stop().css({"display":"block"})
		.animate({"opacity":1},400);
	}

	m.hideSubmenu = function(){
		//$(this).children(".b-submenu").hide();
		$(this).children(".b-submenu").stop().animate(
			{"opacity":0},400
			,function(){
				$(this).css({"display":"none"});
			}
			);
	}

	//события
	m.menuItem.mouseover(m.showSubmenu);
	m.menuItem.mouseout(m.hideSubmenu);
}



