import React from 'react';

export class Stars extends React.Component {

	render(){

		var numberOfStars = Math.floor(Math.random()*9)+ 1;
		console.log(numberOfStars);

		return(
		<div id="stars-frame">
			<div className="Well">
				{numberOfStars}
				
			</div>
				}
		</div>	
		)
	}
}