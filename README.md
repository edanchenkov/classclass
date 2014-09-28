_class
==========

_class brings OOP to your node.js application


### Installation

```
$ npm install 
```


### Features

- Create class and its instance
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

### License

The MIT License (MIT)

Copyright (c) 2014 Egor Danchenkov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



