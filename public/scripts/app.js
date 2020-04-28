'use strict';

console.log('app is running');

var template = React.createElement(
  'h1',
  { id: 'someid' },
  'Reality is often disappointing!'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
