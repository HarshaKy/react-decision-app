"use strict";

console.log('app is running');

var app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer!"
};

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		{ id: "someid" },
		app.title
	),
	React.createElement(
		"p",
		null,
		app.subtitle
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
	if (location) {
		return location;
	}

	return 'Unkown';
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
		user.name
	),
	React.createElement(
		"p",
		null,
		"Age: ",
		user.age
	),
	React.createElement(
		"p",
		null,
		"Location: ",
		getLocation(user.location)
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
