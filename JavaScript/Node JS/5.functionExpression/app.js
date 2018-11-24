/*
//normal function
function sayHi(){
  console.log("Hi...");
}
sayHi();
*/

function callFunction(fun){
  fun();
}

//function expresion
var sayBy = function(){
  console.log("Bye.....");
}

callFunction(sayBy);
