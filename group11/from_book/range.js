var i;

function range(min, max, step) {
  var array = [];
  if (!step) {
    for (i = min; i <= max; i++) {
      array.push(i);
    }
  } else if (step > 0) {
    for (i = min; i <= max; i = i + step) {
      array.push(i);
    }
  } else if (step < 0) {
    for (i = max; i >= min; i = i + step) {
      array.push(i);
    }
  }
  return array;
}

function sum(array2) {
  var sumA = 0;
  for (i = 0; i < array2.length; i++) {
    sumA = sumA + array2[i];
  }
  return sumA;
}
console.log(range(5, 9, -1));
console.log(sum(range(5, 10)));