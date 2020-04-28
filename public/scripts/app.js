console.log('app is running')

var template = React.createElement("h1", {
	id: "someid"
  }, "Something New");

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)