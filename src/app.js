console.log('app is running')

var template = (
	<div>
		<h1 id="someid">Reality is often disappointing!</h1>
		<p>Some info</p>
		<ol>
			<li>Item 1</li>
			<li>Item 2</li>
		</ol>
	</div>
)

var templateTwo = (
	<div>
		<h1>Harsha KY</h1>
		<p>Age: 23</p>
		<p>Location: Bangalore</p>
	</div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)