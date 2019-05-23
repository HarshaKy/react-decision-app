'use strict';

console.log('App.js is running');

var app = {
	title: 'Decision App',
	subtitle: 'Put your life in the hands of a computer.',
	options: ['One', 'Two']
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		{ id: 'testID' },
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		app.subtitle
	),
	app.options && app.options.length > 0 ? React.createElement(
		'p',
		null,
		'Here are your options ',
		React.createElement('br', null),
		app.options
	) : React.createElement(
		'p',
		null,
		'No Options'
	)
);

var count = 0;
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Count: ',
		count
	),
	React.createElement(
		'button',
		{ id: 'myID', className: 'button' },
		'+1'
	)
);

// console.log(templateTwo)
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
