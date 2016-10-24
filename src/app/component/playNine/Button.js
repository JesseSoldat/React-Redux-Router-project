import React from 'react';

export class Button extends React.Component {

	render(){
		let disabled;
		let button;
		let correct = this.props.correct;

		switch(correct) {
			case true:
				button = (
				<button className="btn btn-success btn-lg"
				onClick={this.props.acceptAnswer}>
					<span className="glyphicon glyphicon-ok">
					</span>
				</button>
				);
				break
			case false:
				button = (
				<button className="btn btn-danger btn-lg">
					<span className="glyphicon glyphicon-remove">
					</span>
				</button>
				);
				break
			default:
				disabled = (this.props.selectedNumbers.length === 0);
				button = ( 
					<button className="btn btn-primary btn-lg"
						disabled={disabled}
						onClick={this.props.checkAnswer}
						>
						=
					</button>)
		}

		
		return(
		<div id="button-frame">
			{button}
		</div>
		);
	}
}