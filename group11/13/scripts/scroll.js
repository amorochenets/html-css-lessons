function scroll(sSelector) {
    //-------------
    var s = this;
    //Методы
    s.showHideTopBtn = function() {
        if ($(window).scrollTop() > 300) {
            s.topBtn.fadeIn();
        } else s.topBtn.fadeOut();
        // console.log($(window).height());
    };
    s.slowScroll = function(event) {
        event.preventDefault();
        $('html,body').stop().animate({scrollTop:0},'slow');
    };

    s.main = function() {
            s.init(sSelector);
            //Свойства
            s.topBtn = $('.topBtn');

            //События
            $(window).scroll(s.showHideTopBtn);
            s.topBtn.click(s.slowScroll);

        }
        //-------------
    $(document).ready(s.main);

}



scroll.prototype = new Component();
