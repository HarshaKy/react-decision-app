class IndecisionApp extends React.Component {
	
	constructor(props) {
		super(props)

		this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
		this.handlePick = this.handlePick.bind(this)
		this.handleAddOption = this.handleAddOption.bind(this)
		this.handleDeleteOption = this.handleDeleteOption.bind(this)

		this.state = {
			options: []
		}
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('options')
			const options = JSON.parse(json)
			if(options) {
				this.setState(() => ({ options }))
			}
		} catch (error) {
			console.log(error)
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options)
			localStorage.setItem('options', json)
			console.log('saving')
		}
	}

	componentWillUnmount() {
		console.log('component unmount')
	}

	handleDeleteOptions() {
		this.setState(() => ({ options: [] }))
	}

	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option
			})
		}))
	}

	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length)
		const option = this.state.options[randomNum]

		alert(option)
	}

	handleAddOption(option) {

		if (!option) {
			return 'Enter valid value to add item'
		} else if (this.state.options.indexOf(option) > -1) {
			return 'This option already exists'
		}

		this.setState((prevState) => ({ options: prevState.options.concat([option]) }))
	}

	render() {
		const subtitle = 'Reality is often disappointing' 

		return (
			<div>
				<Header subtitle={subtitle} />
				<Action 
					hasOptions={this.state.options.length > 0} 
					handlePick={this.handlePick}
				/>
				<Options 
					options={this.state.options}
					handleDeleteOptions={this.handleDeleteOptions}
					hasOptions={this.state.options.length > 0}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption 
					handleAddOption = {this.handleAddOption}
				/>
			</div>
		)
	}
}

const Header = (props) =>{
	return (
		<div>
			<h1>{props.title}</h1>
			{props.subtitle && <h2>{props.subtitle}</h2>}
		</div>
	)
}

Header.defaultProps = {
	title: 'Indecision'
}

const Action = (props) => {
	return (
		<div>
			<button 
				onClick={props.handlePick}
				disabled={!props.hasOptions}
			>
				What should I do?
			</button>
		</div>
	)
}

const Options = (props) => {
	return (
		<div>
			{
				props.options.map((option) => (
					<Option 
						key={option} 
						optionText={option}
						handleDeleteOption={props.handleDeleteOption}
					/>
				))
			}

			<button 
				onClick={props.handleDeleteOptions}
				disabled={!props.hasOptions}
			>
				Remove All
			</button>

			{!props.hasOptions && <p>Add an option to get started</p>}
		</div>
	)
}

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button 
				onClick={(e) => {
					props.handleDeleteOption(props.optionText)
				}}
			>
				remove
			</button>
		</div>
	)
}

class AddOption extends React.Component {

	constructor(props) {
		super(props)

		this.handleAddOption = this.handleAddOption.bind(this)

		this.state = {
			error: undefined
		}
	}

	handleAddOption(e) {
		e.preventDefault()

		const option = e.target.elements.option.value.trim()
		const error = this.props.handleAddOption(option)

		this.setState(() => ({ error }))

		if(!error) {
			e.target.elements.option.value = ''
		}
		
	}
	
	render () {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}

				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" placeholder="Type in your option"></input>
					<button>Add Option</button>
				</form>
			</div>
		)
	}
}

const appRoot = document.getElementById('app')
ReactDOM.render(<IndecisionApp />, appRoot)