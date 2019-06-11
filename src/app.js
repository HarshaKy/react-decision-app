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

const appRoot = document.getElementById('app')

