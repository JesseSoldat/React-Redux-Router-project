import React from 'react';

export class Answers extends React.Component {

	render(){
		let props = this.props;
		let selectedNumbers = this.props.selectedNumbers.map(function(i){
			return (
			<span key={i} onClick={() => props.unselectNumber(i)}>{i}</span>
			)
		});
	
		return(
			<div id="answer-frame">
				<div className="well">
				{selectedNumbers}
				</div>
			</div>
		);
	}
}