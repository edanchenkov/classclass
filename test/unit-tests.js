'use strict'

var should = require('should');
var _class = require('./../src/_class');

var Person = new _class('person', ['name', 'age', 'city']);

describe('_class library', function() {

  it('create an instance of class Person', function(done){
    var p1 = Person.new('John', 20, 'London');
    p1.name.should.equal('John');
    p1.age.should.equal(20);
    p1.city.should.equal('London');
    done();
  });

  it('should create a new method of class Person', function(done){
    Person.addMethod('sayHello', function() {
      return 'Hello world';
    });

    var p1 = Person.new('John', 20, 'London');

    p1.sayHello().should.equal('Hello world');

    done();
  });

    it('should have method get()', function(done){
      var p1 = Person.new('John', 20, 'London');
      var json = p1.get();
      // console.dir(json)
      json.name.should.equal('John');
      json.age.should.equal(20);
      json.city.should.equal('London');
      done();
    });

});