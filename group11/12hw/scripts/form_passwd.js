function formChecker(sSelector) {
    //-------------
    var f = this;


    //Методы
    f.check = function(event) {
        // event.preventDefault(); // выключаем событие по-умолчанию
        var currentPasswd = $('.b-form__passwd1').val(),

            strongMark = settings.get('strongMark'),
            err_pass = settings.get('err_pass'),
            pass_mess = '';

        for (var i = 0; i < 5; i++) {
            var re = new RegExp(strongMark[i]);
            if (currentPasswd.match(re)) {
                pass_mess = err_pass[i];
                break;
            }
        }
        $('.b-form__passwd-str').html(pass_mess);
        if (p2 == currentPasswd) {}

        f.check = function(event) {
            var p2 = $('.b-form__passwd2').val(),
            mess2 = 'Пароль не совпадает!';
            if (p2 == currentPasswd) {
            	mess2 = 'Sovpalo';
            }
        $('.b-form__passwd-str2').html(mess2); 
        }

        // console.log(currentPasswd.match("^[a-z]{5,20}$"));
        // if (currentPasswd.match(re)) {
        //     console.log(err_pass[i])
        //     pass_mess = err_pass[i];

        // };

        // pass_mess = 'Введите пароль..';


        // console.log(pass_mess);
        // f.errorMessage.stop()[slideToggle]();
    }

    f.main = function() {
            // alert(sSelector)
            f.init(sSelector);

            //Свойства
            f.textFields = f.find('.b-textfield');



            //События
            // f.elem.submit(f.check); // evem - взято з components - родительское свойство
            $('.b-form__passwd1').focus().keyup(f.check);
            $('.b-form__passwd2').focus().keyup(f.check2);

        }
        //-------------
    $(document).ready(f.main);

}



formChecker.prototype = new Component();
