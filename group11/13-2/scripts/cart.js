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
        c.list.show();
        c.goods[addedGood.getID()] = orderForm.find('.b-order-form__quantity').val();


        $.cookie('cartGoods', c.goods, { 'expires': 7, 'path': '/' });
    };

    c.put = function(currentGood) { //розмещает в списке заказов
        var addedGood = new Good(currentGood),
            good_id_class = 'b-good_id_' + addedGood.getID(),
            existingGood = c.list.find('.' + good_id_class);
        currentGood.addClass('b-good_in-cart');
        if (existingGood.length) {
            c.copyData(currentGood, existingGood, ['.b-order-form__quantity']);
        } else {
            //находим первую строку в корзине, какая пустая и клонируем ее
            var newGood = c.list.find('.b-good:first-child').clone();
            //добавляем клас с айди
            newGood.addClass(good_id_class);
            //копируем с текущего товара в каталоге в новый товар, который будет в корзине
            c.copyData(currentGood, newGood, ['.b-good__image', '.b-good__name', '.b-order-form__quantity', '.b-good__price']);
            c.list.find('.b-goods').append(newGood);
            c.bindMinicartEvents(newGood);
        }
        return addedGood;
    };

    c.load = function() { //загрузка товаров из cookies
        c.goods = $.cookie('cartGoods');
        if (c.goods) {
            $.each(c.goods, function(goods_id, quantity) {
                var currentGood = c.find('.b-good_id_' + goods_id);
                currentGood.find('.b-order-form__quantity').val(quantity);
                c.put(currentGood);
            });
        }

    };
    c.openCart = function(event) {
        c.list.stop().slideToggle();
    };

    c.increseQuantity = function() {
        c.changeQuantity(this, 1);
    };

    c.decreseQuantity = function() {
        c.changeQuantity(this, -1);
    };

    c.changeQuantity = function(oBtn, iShift) {
        var quantityTextField = $(oBtn).siblings('.b-order-form__quantity'),
            currentQuantity = parseInt(quantityTextField.val()) + iShift;
        if (currentQuantity > 0) {
            quantityTextField.val(currentQuantity);
        } else {
            alert('Маловато будет! Маловато!!')
        }
    };

    c.bindMinicartEvents = function(newGood) {
        // 58. назначаем на элементы первой строки корзины (муляж - всё пустое) методы, как и в каталоге (+,-), и плюс к этому - удаление товара

        //59 .end() - встроенный метод jQuery, который позволяет не дублировать объект newGood? в котором ищем элемент и назначаем на него метод
        newGood
            .find('.b-good__delete').bind('click', c.del)
            .end() // встроенный метод, который позволяет не дублировать объект newGood в котором ищем элемент и назанчаем на него метод
            .find('.b-order-form__plus').bind('click', c.increaseQuantity)
            .end()
            .find('.b-order-form__minus').bind('click', c.decreaseQuantity)
            .end()
            .find('.b-order-form').bind('submit', c.add).end();
    };
    c.del = function() {
        var currentGood = $(this).closest('.b-good'),
            goodDel = new Good(currentGood),
            goodId = goodDel.getID();
        c.list.find('.b-good_id_' + goodId).remove();
        c.find('.b-good_id_' + goodId).removeClass('b-good_in-cart');
        delete c.goods[goodId];
        $.cookie('cartGoods', c.goods, { 'expires': 7, 'path': '/' });
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
            c.goods = { /* id:quantity */ };
            $.cookie.json = true;

            c.load();
            //События
            c.find('.b-order-form').bind('submit', c.add);
            c.button.click(c.openCart);
            c.find('.b-order-form__plus').bind('click', c.increseQuantity);
            c.find('.b-order-form__minus').bind('click', c.decreseQuantity);

        }
        //-------------
    $(document).ready(c.main);

}



Cart.prototype = new Component();
