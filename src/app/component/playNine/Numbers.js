import React from 'react';

export class Numbers extends React.Component {

	render(){
		let numbers = [];
		let className;
	
		for(let i = 1; i <= 9; i++){
			numbers.push(
			<div key={i} className="number">
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