'use strict';

console.log('app is running');
var appRoot = document.getElementById('app');

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;

    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? "Hide Details" : "Show Details"
        ),
        visibility && React.createElement(
            'p',
            null,
            'This is some info'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
