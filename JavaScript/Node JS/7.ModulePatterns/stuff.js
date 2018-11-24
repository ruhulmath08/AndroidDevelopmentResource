
//First process
/*
var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a, b){
  return `The sum of ${a} and ${b} is : ${a + b}`;
}

var pi = 3.14159;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/

//Second process
/*
module.exports.counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

module.exports.adder = function(a, b){
  return `The sum of ${a} and ${b} is : ${a + b}`;
}

module.exports.pi = 3.14159;
*/

//Third process
var counter = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a, b){
  return `The sum of ${a} and ${b} is : ${a + b}`;
}

var pi = 3.14159;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
