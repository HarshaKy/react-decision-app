'use strict';

console.log('App.js is running');

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		{ id: 'testID' },
		'Decision App'
	),
	React.createElement(
		'p',
		null,
		'This is some info'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'One'
		),
		React.createElement(
			'li',
			null,
			'Two'
		)
	)
);

var testTemplate = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Harsha Ky'
	),
	React.createElement(
		'p',
		null,
		'Age: 21'
	),
	React.createElement(
		'p',
		null,
		'Location: Bangalore, India'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(testTemplate, appRoot);
