import React from 'react';

export class Numbers extends React.Component {

	render(){
		let numbers = [];
		let className;
		let selectNumber = this.props.selectNumber;
		let selectedNumbers = this.props.selectedNumbers;
		let usedNumbers = this.props.usedNumbers;
	
		for(let i = 1; i <= 9; i++){
			className = "number selected-" + (selectedNumbers.indexOf(i)>=0);
			className += " used-" + (usedNumbers.indexOf(i) >=0);

			numbers.push(
			<div key={i} 
			className={className}
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