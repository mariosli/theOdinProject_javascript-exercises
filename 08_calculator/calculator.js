const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((total, current) => (total + current), 0);
};

const multiply = function(nums) {
  return nums.reduce((total, current) => (total * current), 1);
};

const power = function(number, exponent) {
	return number**exponent;
};

const factorial = function(num) {
	if (num === 0 || num === 1) {
    return 1
  }
  else {
    return num * factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
