var  filename //variable for current menu file
	,countries = ["Argentina","Brazil","Greece","Iceland","Ukraine","Yemen","Zimbabwe"] //Simple array with countries
	,menu = {//associative array of menu
		 "home" : "Домашняя страница"
		,"porfolio" : "Порфолыо"
		,"blog" : "Блог"
		,"contacts" : "Контакты"
		,"about" : "О нас"
	}
	,studentsGrade = {//associative array of student's grades
		 "Ann" : 4.5
		,"Max" : 5
		,"Kate" : 3.7
		,"Mike" : 6.1
		,"John" : 2.3
	}
	;

console.log('Country #5 is '+ countries[4]);//printing country with number 5 in array

filename = "home";//inicialize variable
console.log('Current menu tab: ' + menu[filename]);//printing current menu tab

studentsGrade['Mike'] -= 2;//Decline grade for  Mike 

console.log('13 % 2 = ' + 13%2);