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

var user = {
	name: 'Harsha',
	age: 22,
	location: 'India'
};

var getLocation = function getLocation(location) {
	if (user.location) {
		return React.createElement(
			'p',
			null,
			'Location: ',
			location
		);
	}
};

var testTemplate = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymous'
	),
	user.age && user.age >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
