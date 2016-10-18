import React from 'react';


export class Form extends React.Component {
	render(){
		return(
		<form>
			<input placeholder="Email"/>
			<input placeholder="Password"/>
			<button>Submit</button>
		</form>
		);
	}
}