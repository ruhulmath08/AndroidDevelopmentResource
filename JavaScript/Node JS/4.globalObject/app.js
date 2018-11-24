var time = 0;

var timer = setInterval(function(){
  time += 2;
  console.log(time + ' 3 second have passed');
  if(time > 5){
    clearInterval(timer);
  }
}, 2000);

console.log(__dirname);
console.log(__filename);
