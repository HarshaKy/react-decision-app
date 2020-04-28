console.log('app is running')

const app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer!",
	options: ['One', 'Two']
}

var template = (
	<div>
		<h1 id="someid">{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		{app.options && app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
		<ol>
			<li>Item 1</li>
			<li>Item 2</li>
		</ol>
	</div>
)

const getLocation = (location) => {
	if (location) {
		return <p>Location: {location}</p>
	}
}

var user = {
	name: "Harsha K Y",
	age: 23,
	location: "Bangalore"
}

var templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
		{(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
		{getLocation(user.location)}
	</div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)