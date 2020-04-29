class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Indecision</h1>
				<h2>Reality is often disappointing</h2>
			</div>
		)
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button>What should I do?</button>
			</div>
		)
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<p>Here are your options</p>
			</div>
		)
	}
}

class AddOption extends React.Component {
	render () {
		return (
			<div>
				Add New Option
			</div>
		)
	}
}

const jsx = (
	<div>
		<Header />
		<Action />
		<Options />
		<AddOption />
	</div>
)

ReactDOM.render(jsx, document.getElementById('app'))