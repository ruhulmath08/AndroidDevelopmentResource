var events = require('events');

//EvevtEmitter object
var myEmitter = new events.EventEmitter();

//create event. when this event ('someEvent') occurs trigger the function
//this event is emmited by .on
myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
});

/*
emit(event, [arg1], [arg2], [...])
Execute each of the listeners in order with the supplied arguments. Returns
true if the event had listeners, false otherwise.
*/
myEmitter.emit('someEvent', 'the event was emmited');
