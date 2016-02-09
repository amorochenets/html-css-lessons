function Gallery(sSelector) {
	//----------
	var g = this;
	g.init(sSelector);
	g.picture = g.find('.b-picture');
	g.points = g.find('.b-point');
	g.pictCount = 1;
	g.currentPoint = 0;

	g.tickerTime = 0;
	g.tickerPeriod = 2;
	//-----------
	g.display = function() {
		g.ticker = window.setInterval(g.changeImg, g.tickerPeriod * 1000);
	};

	g.stopPlay = function() {
		clearInterval(g.ticker);
	};

	g.setCurrent = function() {
		g.pictCount = $(this).attr('alt');
		g.currentPoint = $(this).attr('alt') - 1;
		console.log(g.currentPoint);
		console.log(g.pictCount);
		g.showImg();
	};
	g.changeImg = function() {
		g.pictCount = g.pictCount < 5 ? g.pictCount + 1 : g.pictCount = 1;
		g.currentPoint = g.currentPoint < 4 ? g.currentPoint + 1 : g.currentPoint = 0;

		g.showImg();
	};
	g.showImg = function() {
		g.points.removeClass('b-point_active');
		g.find('.b-point:eq(' + (g.currentPoint) + ')').addClass('b-point_active');
		g.picture.attr('src', '../images/gallery/' + g.pictCount + '.jpg');
	};

	//-----------
	// g.picture.ready(g.display);
	g.points.mouseover(g.stopPlay);
	g.points.mouseout(g.display);
	g.points.click(g.setCurrent);
}

Gallery.prototype = new Component();