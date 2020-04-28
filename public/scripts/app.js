"use strict";

console.log('app is running');

var app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer!",
	options: ['One', 'Two']
};

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		{ id: "someid" },
		app.title
	),
	app.subtitle && React.createElement(
		"p",
		null,
		app.subtitle
	),
	app.options && app.options.length > 0 ? React.createElement(
		"p",
		null,
		"Here are your options"
	) : React.createElement(
		"p",
		null,
		"No options"
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"Item 1"
		),
		React.createElement(
			"li",
			null,
			"Item 2"
		)
	)
);

var getLocation = function getLocation(location) {
	return location ? React.createElement(
		"p",
		null,
		"Location: ",
		location
	) : undefined;
};

var user = {
	name: "Harsha K Y",
	age: 23,
	location: "Bangalore"
};

var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		user.name ? user.name : 'Anonymous'
	),
	user.age && user.age >= 18 && React.createElement(
		"p",
		null,
		"Age: ",
		user.age
	),
	getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
