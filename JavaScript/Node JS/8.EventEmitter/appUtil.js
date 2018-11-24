var events = require('events');

//The Util module provides access to some utility functions.
//The node.js "util" module provides "utility" functions that are potentially helpful to a developer
var util = require('util');

var Person = function(name){
  this.name = name;
};

//inherits EventEmitter in our person constructor
util.inherits(Person, events.EventEmitter);

var ruhul = new Person('Ruhul');
var arif = new Person('Arif');
var reza = new Person('Reza');
var people = [ruhul, arif, reza];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + ' said ' + mssg);
  });
});

ruhul.emit('speak', 'hi man');
arif.emit('speak', 'hello man');
reza.emit('speak', 'oh man');
