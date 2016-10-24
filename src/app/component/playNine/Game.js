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
		selectedNumbers: [],
		usedNumbers: [],
		correct: null
		};

		this.selectNumber = this.selectNumber.bind(this);

		this.unselectNumber = this.unselectNumber.bind(this);

		this.sumOfSelectedNumbers = this.sumOfSelectedNumbers.bind(this);

		this.checkAnswer = this.checkAnswer.bind(this);

		this.acceptAnswer = this.acceptAnswer.bind(this);
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
			this.setState({
				selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
				correct: null
			});	
		}
	}

	unselectNumber(clickedNumber){
		let selectedNumbers = this.state.selectedNumbers;
		let indexOfNumber = selectedNumbers.indexOf(clickedNumber);
		selectedNumbers.splice(indexOfNumber, 1);

		this.setState({
			selectedNumbers: selectedNumbers,
			correct: null
		});
	}

	sumOfSelectedNumbers(){
		return this.state.selectedNumbers.reduce((p, n) => {
			return p + n;
		}, 0);
	}

	checkAnswer(){
		let correct = (this.state.numberOfStars === this.sumOfSelectedNumbers());

		this.setState({ correct: correct});
	}

	acceptAnswer(){
		let usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
		this.setState({
			selectedNumbers: [],
			usedNumbers: usedNumbers,
			correct: null,
			numberOfStars: Math.floor(Math.random()*9)+ 1
		})
	}

	render(){
		let numberOfStars = this.state.numberOfStars;
		let selectedNumbers = this.state.selectedNumbers;
		let correct = this.state.correct;
		let usedNumbers = this.state.usedNumbers;

		return(
		<div>
			<Nav/>
			<h2>Play Nine</h2>
			<div className="clearfix">

				<Stars 
					numberOfStars={numberOfStars}
				/>

				<Button 
					correct={correct}
					selectedNumbers={selectedNumbers}
					checkAnswer={this.checkAnswer}
					acceptAnswer={this.acceptAnswer}
				/>

				<Answers
					unselectNumber={this.unselectNumber}
					selectedNumbers={selectedNumbers} 
				/>

			</div>

			<Numbers 
				selectedNumbers={selectedNumbers}
				selectNumber={this.selectNumber} 
				usedNumbers={usedNumbers}
			/>


		</div>
		)
	}
}