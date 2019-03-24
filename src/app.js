console.log('App.js is running')

var app = {
	title: 'Decision App',
	subtitle: 'About Decision App'
}

var template = (
<div>
	<h1 id="testID">{app.title}</h1>
	<p>{app.subtitle}</p>
	<ol>
		<li>One</li>
		<li>Two</li>
	</ol>
</div>
)

var user = {
	name: 'Harsha',
	age: 22,
	location: 'Bangalore'
}

var testTemplate = (
	<div>
		<h1>{user.name}</h1>
		<p>Age: {user.age}</p>
		<p>Location: {user.location}</p>
	</div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)