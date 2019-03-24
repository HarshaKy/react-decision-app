'use strict';

console.log('App.js is running');

var template = React.createElement(
  'h1',
  { id: 'testID' },
  'Decision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
