'use strict';

console.log('app is running');

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		{ id: 'someid' },
		'Reality is often disappointing!'
	),
	React.createElement(
		'p',
		null,
		'Some info'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item 1'
		),
		React.createElement(
			'li',
			null,
			'Item 2'
		)
	)
);

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Harsha KY'
	),
	React.createElement(
		'p',
		null,
		'Age: 23'
	),
	React.createElement(
		'p',
		null,
		'Location: Bangalore'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
