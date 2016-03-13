var	
	 a = 5
	,b = 7
	,result = 0
	,totalResult = 0
	;

result = a*b;
console.log(a + " * " + b +" = " + result);
result += 10;
console.log("result + 10 = " + result);
// result ++;
// console.log('result++ is ' + result);

totalResult = result++;
console.log('Postincrement ' + totalResult + " " + result);
totalResult = ++result;
console.log('Preincrement ' + totalResult + " " + result);

