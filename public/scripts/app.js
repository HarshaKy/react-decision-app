console.log('App.js is running')

var template = React.createElement("h1", {
		id: "testID"
	}, "Hello World!")

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)