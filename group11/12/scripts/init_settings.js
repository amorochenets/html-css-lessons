var _page_settings = {
	"your_form" : "Ваша форма"
	,"langs" : {
  		"b-form__label_name" : {
  			"ru" : "Имя"
   		 	,"ua" : "Ім'я"
     		}
  ,"b-form__label_surname" : {
  			"ru" : "Фамилия"
			,"ua" : "Прізвище"
     }
  ,"b-form__label_season" : {
   			"ru" : "Ваше любимое время года"
  		   ,"ua" : "Ваша улюблена пора року"
     }
  ,"b-form__label_fruit" : {
  			"ru" : "Ваш любимый фрукт"
  		   ,"ua" : "Ваш улюблений фрукт"
     }
  ,"b-form__label_animals" : {
  			"ru" : "Ваше любимое животное"
  		   ,"ua" : "Ваше улюблена тварина"
     }
  ,"b-form__label_review" : {
  			"ru" : "Ваш отзыв"
  		   ,"ua" : "Ваш відгук"
     }
      }
    ,"regexps" : {
    	"name" : "^[а-яА-ЯґҐЄєІіЇїa-zA-Z0-9\\- _]{1,25}$"
    	,"brand" : "^[a-zA-Z0-9\\- _]{1,20}$"
    	,"price" : "^[0-9]{1,5}(\\.[0-9]{1,2})?$"
    	,"description" : "^[а-яА-ЯґҐЄєІіЇїa-zA-Z0-9\\- _\n]{0,150}$"
    }
};
settings.init(_page_settings);

// var _message_settings = {
// 	"en" : {
// 			"error" : "Error!"
// 			,"sucsess" : "Sucsess!"
// 			,"agree" : "Are you sure?"
// 			,"worning" : "Attention! The action is irreversible!"
// 			}
// 	,"ru" : {
// 			"error" : "Ошибка!"
// 			,"sucsess" : "Действие успешно завершено"
// 			,"agree" : "Вы уверены?"
// 			,"worning" : "Внимание! Действие необратимо"
// 			}
// 	,"ua" : {
// 			"error" : "Помилка!"
// 			,"sucsess" : "Дія успішно виконана!"
// 			,"agree" : "Ви упевнені?"
// 			,"worning" : "Увага! Дію не можливо відмінити!"
// 			}
// }
// messages.init(_message_settings);
// _message_settings = messages.change(_message_settings);