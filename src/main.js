'use strict';

define(function (require) {
  var mylib = require('my-library'),
    React = require('react'),
    ReactDOM = require('react-dom');

  console.log(mylib.sayHello());

  ReactDOM.render(
    React.createElement('p', {}, 'vihinen.net'),
    document.getElementById('root')
  );
  
});
