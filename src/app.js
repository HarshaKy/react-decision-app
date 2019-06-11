console.log('App.js is running')

const app = {
	title: 'Decision App',
	subtitle: 'Put your life in the hands of a computer.',
	options: []
}

const onFormSubmit = (e) => {
	e.preventDefault()

	const option = e.target.elements.option.value

	if (option) {
		app.options.push(option)
		e.target.elements.option.value = ''
		render()
	}
}

const onRemoveAll = () => {
	app.options = []
	render()
}


const appRoot = document.getElementById('app')



const render = () => {
	const template = (
		<div>
			<h1 id="testID">{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			{(app.options && app.options.length > 0) ? 
				<p>Here are your options <br></br>
					{app.options}
				</p> : <p>No Options</p>}
				<p>{app.options.length}</p>

				<button onClick={onRemoveAll}>Remove All</button>

				<form onSubmit={onFormSubmit}>
					<input type="text" name="option"></input>
					<button>Add Option</button>
				</form>
		</div>
	)

	ReactDOM.render(template, appRoot)
}

render()