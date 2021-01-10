import React from 'react'
import Option from './Option'

const Options = (props) => (
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

export default Options