"use strict";

console.log('app is running');

var app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer!",
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		console.log(app.options);
		e.target.elements.option.value = '';

		renderApp();
	}
};

var removeAll = function removeAll() {
	app.options = [];
	renderApp();
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
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
			"p",
			null,
			app.options.length
		),
		React.createElement(
			"button",
			{ onClick: removeAll },
			"Remove All"
		),
		React.createElement(
			"ol",
			null,
			app.options.map(function (option) {
				return React.createElement(
					"li",
					{ key: option },
					option
				);
			})
		),
		React.createElement(
			"form",
			{ onSubmit: onFormSubmit },
			React.createElement("input", { type: "text", name: "option", placeholder: "Type in your option" }),
			React.createElement(
				"button",
				null,
				"Add Option"
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

renderApp();
