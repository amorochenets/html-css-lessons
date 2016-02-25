function Good(oGoodElement) {
    var g = this;
    g.elem = oGoodElement;

    g.getID = function() {
        return g.elem.attr('class').match(/b-good_id_([0-9]{1,11})/)[1];
        // console.log(goodID);
    };
}

function Cart(sSelector, sCartSelector) {
    //-------------
    var c = this;
    //Методы
    c.add = function(event) { //добавление товара в корзину
        event.preventDefault();
        var orderForm = $(this), //при клике на submit попадает вся форма
            currentGood = orderForm.closest('.b-good'), //строка tr с даным товаром. по форме находим ближайший tr с класом b-good
            addedGood = c.put(currentGood); //для розмещения товара в корзине
    };

    c.put = function(currentGood) { //розмещает в списке заказов
        var addedGood = new Good(currentGood),
            good_id_class = 'b-good_id_' + addedGood.getID(),
            existingGood = c.list.find('.' + good_id_class);
        currentGood.addClass('b-good_in-cart');

    };

    c.load = function() { //загрузка товаров из cookies

    };

    c.main = function() {
            c.init(sSelector);
            //Свойства
            c.cart = $(sCartSelector);
            c.list = c.cart.find('.b-minicart__list'); //
            c.button = c.cart.find('.b-minicart__button');
            c.order = c.cart.find('.b-minicart__order');
            c.quantity = c.cart.find('.b-minicart__quantity');
            c.total = c.cart.find('.b-minicart__total');


            //События
            c.find('.b-order-form').bind('submit', c.add);

        }
        //-------------
    $(document).ready(c.main);

}



Cart.prototype = new Component();
