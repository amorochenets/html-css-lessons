var counters = '',
	nums = [3, 9, -3, 2, -1, -6, 0, 5, 8, -7, -3, 4],
	result = '';


for (var i = 0; i <= 5; i++) {
	// console.log(i);
};

console.log('---')

for (var i = 5; i >= 0; i--) {
	counters += '#' + i + ' ';

};

console.log(counters);

for (var i = 0; i < nums.length; i++) {
	if (nums[i] < 0) {
		result += nums[i] + ' ';
	}
};
console.log('Nums < 0 is: ' + result);

result = '';

for (var i = 0; i < nums.length; i++) {
	if (nums[i] >= 0) {
		result += nums[i] + ' ';
	}
};
console.log('Nums >= 0 is: ' + result);

result = '';

for (var i = 0; i < nums.length; i++) {
	if (nums[i] >= -1 && nums[i] <= 5) {
		result += nums[i] + ' ';
	}
};
console.log('Nums from -1 till 5 is: ' + result);

result = 1;

for (var i = 0; i < nums.length; i++) {
	if (nums[i] % 2 != 0) {
		result *= nums[i];
	}
};
console.log('Result for *: ' + result);


result = '';

for (var i = 0; i < nums.length; i += 2) {
	if (nums[i] > -6) {
		result += nums[i] + ' ';
	}
};
console.log('Nums > -6 is: ' + result);

result = '';

for (var i = 0; i < nums.length; i += 2) {
	result += (nums[i] + nums[i + 1]) + ' ';
};
console.log('I+(I+1): ' + result);