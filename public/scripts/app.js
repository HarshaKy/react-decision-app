'use strict';

console.log('App.js is running');

var app = {
	title: 'Decision App',
	subtitle: 'About Decision App'
};

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		{ id: 'testID' },
		app.title
	),
	React.createElement(
		'p',
		null,
		app.subtitle
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

var user = {
	name: 'Harsha',
	age: 22,
	location: 'Bangalore'
};

var testTemplate = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
