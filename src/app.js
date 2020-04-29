class IndecisionApp extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Action />
				<Options />
				<AddOption />
			</div>
		)
	}
}

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
				Here are your options
				<Option />
			</div>
		)
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				Option component Here
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))