var	name = "Lili" //Declarate and initialise variable
	,students = ["Ann","Kate","Mary","Lili"]//Simple array
	,group = { //Associative array
		"Ann" : 4.2
		,"Kate" : 5
		,"Mary" : 5
		,"Lili" : 3.5
	}
	,studentsQuantity
	;

students[3] = "Mike";
group["Ann"] = 5; // Re-declaration element of array
alert("Hello, " + students[0] + "! You have " + 	group[students[0]] + " grade! :)"); //Adding variable to string and print to display
students[4] = "Alex"; //adding new student
group["Alex"] = 4.9; //adding grade for new student
alert(students); //Printing all list of students
studentsQuantity = students.length; //Quantity of students
alert("Quantity of students is " +studentsQuantity); //printing quantity of studens
alert("Grade for student " + students[4] + " is " + group[students[4]] + "!"); // Printing grade for imputed student

