_class
==========

_class brings OOP to your node.js application


### Installation

```
$ npm install 
```


### Features

- Create class
- Add methods
- Describe class
- Get object


### Examples

```javascript
var _class = require('./src/_class');

var Person = new _class('person', ['name', 'age', 'city']);
var Animal = new _class('animal', ['name', 'voice', 'color']);


Person.addMethod('isAdult', function() {
  return this.age < 18 ? false : true;
});

Animal.addMethod('say', function() {
  return console.log(this.color + ' ' + this.name + ' says ' + this.voice);
});

var p1 = Person.new('Egor', 21, 'Helsinki', 20);
var a1 = Animal.new('Wolf', 'Whooo', 'White');

a1.say();

if(p1.isAdult()) {
  console.log(p1.name + ' is an adult');
} else {
  console.log(p1.name + ' is too young');
};

console.dir(a1.get());

var Creature = new _class('creature', ['type', 'size']);


```
