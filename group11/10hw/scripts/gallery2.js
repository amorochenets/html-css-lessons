function Gallery(sSelector) {

	//----------
	var g = this;
	g.init(sSelector);
	g.pictures = g.find('.b-picture');
	g.preview = g.find('.b-preview');
	g.previewImage = g.find('.b-preview__image');
	g.previewText = g.find('.b-preview__text');
	g.previewText2 = g.find('.b-preview__text2');
	var audio = document.getElementsByTagName("audio")[0];

	//-----------
	g.showPreview = function() {
		var picture = $(this);
		g.display(picture);
		g.current = g.pictures.index(picture);
	};
	g.closePreview = function(event) {
		
			g.preview.removeClass('b-preview_shown');
		
	};

	g.display = function(pict) {
		var pic = pict.find('.b-picture__image').attr('src').replace(/small_/g, '');
		g.previewImage.attr('src', pic);
		var text = pict.find('.b-picture__image').attr('alt')
		g.previewText.html(text);
		g.previewText2.html(settings.get(text));
		g.preview.addClass('b-preview_shown');
		audio.play(100);
		console.log(pic);
	};

	//-----------
	g.pictures.mouseover(g.showPreview);

	g.pictures.mouseout(g.closePreview);
}

Gallery.prototype = new Component();