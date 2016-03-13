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
        f.currentPasswd = currentPasswd;

    }
    f.check2 = function(event) {
        var p2 = $('.b-form__passwd2').val(),
            mess2 = "<span style='color:#FF000D'>Пароль не совпадает!</span>";
        if (p2 == f.currentPasswd) {
            mess2 = "<span style='color:#0007FF'>Пароль совпал!</span>";
        }
        $('.b-form__passwd-str2').html(mess2);
    }

    f.main = function() {
            // alert(sSelector)
            f.init(sSelector);

            //Свойства
            f.textFields = f.find('.b-textfield');
            f.currentPasswd = '';

            //События

            $('.b-form__passwd1').keyup(f.check);
            $('.b-form__passwd2').keyup(f.check2);

        }
        //-------------
    $(document).ready(f.main);

}



formChecker.prototype = new Component();
