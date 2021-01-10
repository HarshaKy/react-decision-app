import React from 'react'
import AddOption from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
	
	state = {
		options: [],
		selectedOption: undefined
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
		}
	}

	componentWillUnmount() {
		console.log('component unmount')
	}

	handleDeleteOptions = () => {
		this.setState(() => ({ options: [] }))
	}

	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option
			})
		}))
	}

	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length)
		const option = this.state.options[randomNum]

		this.setState(() => ({
			selectedOption: option
		}))
	}

	handleClearSelectedOption = () => {
		this.setState(() => ({
			selectedOption: undefined
		}))
	}

	handleAddOption = (option) => {

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
				<OptionModal 
					selectedOption={this.state.selectedOption}
					handleClearSelectedOption={this.handleClearSelectedOption}
				/>
			</div>
		)
	}
}

export default IndecisionApp