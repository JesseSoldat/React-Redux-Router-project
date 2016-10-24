import React from 'react';

export class Numbers extends React.Component {

	render(){
		let numbers = [];
		let className;
		let selectNumber = this.props.selectNumber;
		let selectedNumbers = this.props.selectedNumbers;
	
		for(let i = 1; i <= 9; i++){
			numbers.push(
			<div key={i} 
			className="number"
			onClick={() => selectNumber(i)}>
				{i}
			</div>
			);
		}
		return(
		<div id="numbers-frame">
			<div className="well">
				{numbers}
			</div>
		</div>
		);
	}
}