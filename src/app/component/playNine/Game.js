import React from 'react';
import firebase from 'firebase';
import { browserHistory, Link } from 'react-router';
import { Nav } from '../Nav';
import { Stars } from './Stars';
import { Button } from './Button';
import { Answers } from './Answers';
import { Numbers } from './Numbers';

export class Game extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
		numberOfStars: Math.floor(Math.random()*9)+ 1,
		selectedNumbers: []
		};

		this.selectNumber = this.selectNumber.bind(this);
	}


	componentWillMount() {
		firebase.auth().onAuthStateChanged(function(user){
			if(!user){
				browserHistory.push('/login');
			}
		});
	}

	selectNumber(clickedNumber){
		console.log(clickedNumber);
		if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
			
		}
	}

	render(){
		return(
		<div>
			<Nav/>
			<h2>Play Nine</h2>
			<div className="clearfix">
				<Stars numberOfStars={this.state.numberOfStars}/>
				<Button selectedNumbers={this.state.selectedNumbers}/>
				<Answers />
			</div>
			<Numbers selectedNumbers={this.state.selectedNumbers}
				selectNumber={this.selectNumber} />


		</div>
		)
	}
}