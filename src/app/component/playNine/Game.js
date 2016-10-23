import React from 'react';
import firebase from 'firebase';
import { browserHistory, Link } from 'react-router';
import { Nav } from '../Nav';
import { Stars } from './Stars';

export class Game extends React.Component {

	componentWillMount() {
		firebase.auth().onAuthStateChanged(function(user){
			if(!user){
				browserHistory.push('/login');
			}
		});
	}

	render(){
		return(
		<div>
			<Nav/>
			<h2>Play Nine</h2>
			<div className="clearfix">
				<Stars />
			</div>

		</div>
		)
	}
}