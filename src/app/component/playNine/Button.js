import React from 'react';

export class Button extends React.Component {

	render(){
		let disabled;
		disabled = (this.props.selectedNumbers.length === 0);
		return(
		<div id="button-frame">
			<button className="btn btn-primary"
				disabled={disabled}>=</button>
		</div>
		);
	}
}