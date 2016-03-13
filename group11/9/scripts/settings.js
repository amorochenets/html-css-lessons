//static class
var settings = {}; 
//свойства для ханения массива
settings.data = {};
//метод для запичи массива в свойтсва settings.data
settings.init = function(oSettings){
	settings.data = oSettings;
}
//метод - по названию ключа будет получать массив или значение, которому соответствует и возвращать это значение
settings.get = function(sSettingsName){
	return settings.data[sSettingsName];
};