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

var addOne = function addOne() {
	count++;
	// console.log('addOne', count)
	renderCounter();
};

var removeOne = function removeOne() {
	count--;
	renderCounter();
	// console.log('removeOne')
};

var reset = function reset() {
	count = 0;
	renderCounter();
	// console.log('reset')
};

var appRoot = document.getElementById('app');

var renderCounter = function renderCounter() {
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
			{ onClick: addOne },
			'+1'
		),
		React.createElement(
			'button',
			{ onClick: removeOne },
			'-1'
		),
		React.createElement(
			'button',
			{ onClick: reset },
			'Reset'
		)
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderCounter();
