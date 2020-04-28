console.log('app is running')

const app = {
	title: "Indecision App",
	subtitle: "Put your life in the hands of a computer!",
	options: []
}

const onFormSubmit = (e) => {
	e.preventDefault()

	const option = e.target.elements.option.value

	if (option) {
		app.options.push(option)
		console.log(app.options)
		e.target.elements.option.value = ''

		renderApp()
	}
}

const removeAll = () => {
	app.options = []
	renderApp()
}

const renderApp = () => {
	const template = (
		<div>
			<h1 id="someid">{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			{app.options && app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
			
			<p>{app.options.length}</p>
	
			<ol>
				<li>Item 1</li>
				<li>Item 2</li>
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" placeholder="Type in your option"></input>
				<button>Add Option</button>
				<button onClick={removeAll}>Remove All</button>
			</form>
		</div>
	)
	
	ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById('app')

renderApp()