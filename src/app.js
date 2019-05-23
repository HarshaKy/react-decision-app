console.log('App.js is running')

const app = {
	title: 'Decision App',
	subtitle: 'Put your life in the hands of a computer.',
	options: ['One', 'Two']
}

const template = (
<div>
	<h1 id="testID">{app.title}</h1>
	{app.subtitle && <p>{app.subtitle}</p>}
	{(app.options && app.options.length > 0) ? 
		<p>Here are your options <br></br>
			{app.options}
		</p> : <p>No Options</p>}
</div>
)

let count = 0
const templateTwo = (
	<div> 
		<h1>Count: {count}</h1>

		<button id="myID" className="button">+1</button>
	</div>
)

// console.log(templateTwo)
const appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)