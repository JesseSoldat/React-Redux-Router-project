import React from 'react';

export class Stars extends React.Component {

	render(){

		let stars = [];

		for (let i = 0; i < this.props.numberOfStars; i++){
			stars.push(
			<span key={i} className="glyphicon glyphicon-star"></span>
			);
		}
		return(
		<div id="stars-frame">
			<div className="well">
				{stars}
			</div>
		</div>	
		)
	}
}