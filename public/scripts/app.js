'use strict';

console.log('App.js is running');

var app = {
	title: 'Decision App',
	subtitle: 'Put your life in the hands of a computer.',
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}
};

var onRemoveAll = function onRemoveAll() {
	app.options = [];
	render();
};

var appRoot = document.getElementById('app');

var render = function render() {
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
		),
		React.createElement(
			'p',
			null,
			app.options.length
		),
		React.createElement(
			'button',
			{ onClick: onRemoveAll },
			'Remove All'
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

render();
