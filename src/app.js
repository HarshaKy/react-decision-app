console.log('App.js is running')

var app = {
	title: 'Decision App',
	subtitle: 'Put your life in the hands of a computer.',
	options: ['One', 'Two']
}

var template = (
<div>
	<h1 id="testID">{app.title}</h1>
	{app.subtitle && <p>{app.subtitle}</p>}
	{(app.options && app.options.length > 0) ? 
		<p>Here are your options <br></br>
			{app.options}
		</p> : <p>No Options</p>}
</div>
)

var user = {
	name: 'Harsha',
	age: 22,
	location: 'India'
}

var getLocation = (location) => {
	if (user.location) {
		return <p>Location: {location}</p>
	}
}

var testTemplate = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)