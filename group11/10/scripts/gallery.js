function Gallery(sSelector) {
	// ---------
	var g = this;
	//g.gallery = $(sSelector);
	g.init(sSelector);
	g.pictures = g.find('.b-picture');
	g.arrowPrev = g.find('.b-preview__arrow_prev');
	g.arrowNext = g.find('.b-preview__arrow_next');
	g.preview = g.find('.b-preview');
	g.previewImage = g.find('.b-preview__image');
	g.previewText = g.find('.b-preview__text');
	g.current = 0;
	g.max = g.pictures.length;

	//----------

	g.showPreview = function() {
		var picture = $(this);
		g.display(picture);
		g.current = g.pictures.index(picture);
	};
	g.closePreview = function(event) {
		if (!event || $(event.target).hasClass('b-preview')) {
			g.preview.removeClass('b-preview_shown');
		};
	};
	g.showImage = function(iShift) {
		g.current += iShift;
		if (g.current >= g.max) {
			g.current = 0;
		} else if (g.current < 0) {
			g.current = g.max - 1;
		};
		// if (g.current == 1 || g.current == g.max - 2) {
		// 	g.addArrowEvents();
		// } else if (g.current >= g.max) {
		// 	g.arrowNext.css('opacity', '.2');
		// 	g.arrowNext.unbind();
		// 	g.current = g.max - 1;
		// } else if (g.current < 0) {
		// 	g.arrowPrev.css('opacity', '.2');
		// 	g.arrowPrev.unbind();
		// 	g.current = 0;
		// } else {
		// 	g.arrowNext.css('opacity', '1');
		// 	g.arrowPrev.css('opacity', '1');
		// };



		g.display(g.find('.b-picture:eq(' + g.current + ')'));
	};
	g.display = function(pict) {
		var pic = pict.find('.b-picture__image').attr('src').replace(/small_/g, '');
		g.previewImage.attr('src', pic);
		g.previewText.html(pict.find('.b-picture__image').attr('alt'))
		g.preview.addClass('b-preview_shown');
	};
	g.showPrevious = function() {
		g.showImage(-1);
	};
	g.showNext = function() {
		g.showImage(1);
	};

	g.addArrowEvents = function() {
		g.arrowNext.bind('click', g.showNext);
		g.arrowPrev.bind('click', g.showPrevious);
	};

	g.keyManage = function(event) {
		// alert(event.which)
		if (event.which == 27) {
			g.closePreview();
		} else	if (event.which == 37) {
			g.showPrevious();
		}else if (event.which == 39) {
			g.showNext();
		};
	};

	//----------

	g.pictures.click(g.showPreview);
	g.preview.click(g.closePreview);
	g.addArrowEvents();
	$('body').keyup(g.keyManage);
}

Gallery.prototype = new Component();