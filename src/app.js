console.log('App.js is running')

var template = (
<div>
	<h1 id="testID">Decision App</h1>
	<p>This is some info</p>
	<ol>
		<li>One</li>
		<li>Two</li>
	</ol>
</div>
)

var testTemplate = (
	<div>
		<h1>Harsha Ky</h1>
		<p>Age: 21</p>
		<p>Location: Bangalore, India</p>
	</div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(testTemplate, appRoot)