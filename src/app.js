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

const addOne = () => {
	count++
	// console.log('addOne', count)
	renderCounter()
}

const removeOne = () => {
	count--
	renderCounter()
	// console.log('removeOne')
}

const reset = () => {
	count = 0
	renderCounter()
	// console.log('reset')
}

const appRoot = document.getElementById('app')

const renderCounter = () => {
	const templateTwo = (
		<div> 
			<h1>Count: {count}</h1>
	
			<button onClick={addOne}>+1</button>
			<button onClick={removeOne}>-1</button>
			<button onClick={reset}>Reset</button>
		</div>
	)

	ReactDOM.render(templateTwo, appRoot)
}

renderCounter()