function Gallery(sSelector) {
	//----------
	var g = this;
	g.init(sSelector);
	g.picture = g.find('.b-picture');
	g.pictCount = 1;

	g.tickerTime = 0;
	g.tickerPeriod = 2;
	//-----------
	g.display = function() {
		g.ticker = window.setInterval(g.changeImg, g.tickerPeriod * 1000);
	};
	g.changeImg = function() {
			g.pictCount = g.pictCount < 6 ? g.pictCount + 1 : g.pictCount = 1;
			g.picture.attr('src', '../images/gallery/' + g.pictCount + '.jpg')
		}
		//-----------
	g.picture.ready(g.display);
}

Gallery.prototype = new Component();