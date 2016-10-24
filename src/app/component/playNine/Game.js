import React from 'react';
import firebase from 'firebase';
import { browserHistory, Link } from 'react-router';
import { Nav } from '../Nav';
import { Stars } from './Stars';
import { Button } from './Button';
import { Answers } from './Answers';
import { Numbers } from './Numbers';
import { Done } from './Done';

export class Game extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
		numberOfStars: this.randomNumber(),
		selectedNumbers: [],
		usedNumbers: [],
		correct: null,
		redraws: 5,
		doneStatus: null
		};

		this.selectNumber = this.selectNumber.bind(this);

		this.unselectNumber = this.unselectNumber.bind(this);

		this.sumOfSelectedNumbers = this.sumOfSelectedNumbers.bind(this);

		this.checkAnswer = this.checkAnswer.bind(this);

		this.acceptAnswer = this.acceptAnswer.bind(this);

		this.redraw = this.redraw.bind(this);

		this.randomNumber = this.randomNumber.bind(this);

		this.updateDoneStatus = this.updateDoneStatus.bind(this);

		this.possibleSolution = this.possibleSolution.bind(this);

		this.possibleCombinationSum = this.possibleCombinationSum.bind(this);

		this.resetGame = this.resetGame.bind(this);

		
	}


	componentWillMount() {
		firebase.auth().onAuthStateChanged(function(user){
			if(!user){
				browserHistory.push('/login');
			}
		});
	}

	resetGame(){
		this.setState({
			numberOfStars: this.randomNumber(),
			selectedNumbers: [],
			usedNumbers: [],
			correct: null,
			redraws: 5,
			doneStatus: null
		});
	}

	possibleCombinationSum(arr, n) {
			console.log('possibleCombinationSum');
			  if (arr.indexOf(n) >= 0) { return true; }
			  if (arr[0] > n) { return false; }
			  if (arr[arr.length - 1] > n) {
			    arr.pop();
			    return possibleCombinationSum(arr, n);
			  }
			  var listSize = arr.length, combinationsCount = (1 << listSize)
			  for (var i = 1; i < combinationsCount ; i++ ) {
			    var combinationSum = 0;
			    for (var j=0 ; j < listSize ; j++) {
			      if (i & (1 << j)) { combinationSum += arr[j]; }
			    }
			    if (n === combinationSum) { return true; }
			  }
			  return false;
	}

	randomNumber(){
		return Math.floor(Math.random()*9) + 1
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
			numberOfStars: this.randomNumber()
		}, function(){
			this.updateDoneStatus();
		})
	}

	redraw(){
		if(this.state.redraws > 0) {
			this.setState({
				numberOfStars: this.randomNumber(),
				correct: null,
				selectedNumbers: [],
				redraws: this.state.redraws -1
			}, function(){
				this.updateDoneStatus();
			});
		}
	}

	possibleSolution(){
		let numberOfStars = this.state.numberOfStars;
		let possibleNumbers = [];
		let usedNumbers = this.state.usedNumbers;

		for(let i = 1; i <=9; i++){
			if(usedNumbers.indexOf(i) < 0){
				possibleNumbers.push(i);
			}
		}
		// console.log('possibleSolution');
		return this.possibleCombinationSum(possibleNumbers, numberOfStars);
	}

	updateDoneStatus(){
		if(this.state.usedNumbers.length === 9){
			this.setState({
				doneStatus: 'You Win!'
			});
			return;
		}
		if(this.state.redraws === 0 && !this.possibleSolution()){
			this.setState({
				doneStatus: 'Game Over!'
			});
		}
	}

	render(){
		let numberOfStars = this.state.numberOfStars;
		let selectedNumbers = this.state.selectedNumbers;
		let correct = this.state.correct;
		let usedNumbers = this.state.usedNumbers;
		let redraws = this.state.redraws;
		let doneStatus = this.state.doneStatus;
		let bottomFrame;

		if (doneStatus) {
			bottomFrame = <Done doneStatus={doneStatus}
				resetGame={this.resetGame}
			/>
		} else {
			bottomFrame = <Numbers
				selectedNumbers={selectedNumbers}
				usedNumbers={usedNumbers}
				selectNumber={this.selectNumber}
				/>
		}


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
					redraw={this.redraw}
					redraws={redraws}
				/>

				<Answers
					unselectNumber={this.unselectNumber}
					selectedNumbers={selectedNumbers} 
				/>

			</div>
			{bottomFrame}


		</div>
		)
	}
}