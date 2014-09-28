'use strict'

var models = {};

var model = function(name, props) {
  this.name = name;
  this.properties = props;
  this.methods = {};
  if(models[name] === undefined) {
    models[name] = {
      properties: props,
      methods: {}
    };
  } else {
    throw new Error('This model already exist : ' + name);
  };
};

model.prototype.addMethod = function(name, method) {
  if(typeof name === 'string' && name !== '') {
    models[this.name].methods[name] = method;
    return this.methods[name] = method;
  } else {
    throw new Error('Incorrect name method : ' + name);
  };
};

model.prototype.describe = function() {
  return console.log(models[this.name]);
};

model.prototype.new = function() {
  var instance = {};
  
  for (var i = 0; i < this.properties.length; i++) {
    instance[this.properties[i]] = arguments[i];
  };

  instance['get'] = function() {
    var o = {};
    for(var key in this) {
      if(typeof this[key] !== 'function') {
        o[key] = this[key];
      };
    };
    return o;
  };

  for(var key in this.methods) {
    if(key !== 'get') {
      instance[key] = this.methods[key];
    };
  };

  return instance;
};

// model.prototype.extend = function(name, props) {
//   // models[this.name].children = {};
//   // var o = models[this.name].children[name] =  {
//   //   name: name,
//   //   properties: props,
//   //   methods: {},
//   //   parent: this.name
//   // };

//   // return o;
//   return new model(name, props, this.name);
// };



module.exports = model;


