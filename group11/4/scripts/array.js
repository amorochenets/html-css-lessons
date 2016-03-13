var nums = [-1, 5, 9, -7, 4];

nums.shift();
nums.pop();

console.log('Array with deleted first and last elements: ' + nums);

nums.unshift(8);
nums.push(-2);

console.log('Array with added new first and last elements: ' + nums);

var
	x = [1, 92, 3],
	y = [4, 5, 6];

nums.splice(2, 1);
console.log('Splice: ' + nums);
delete nums[0]; //фактически - очищение ячейки (без смещения позиции)
console.log('Delete: ' + nums); 

var nums1 = [55, 206, 1, 8, 33, 10, 6]; //сортировка
nums1.sort(
   function(a, b){
    return a-b // или b-a
   });

console.log(nums1);