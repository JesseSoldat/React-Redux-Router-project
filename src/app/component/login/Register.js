import React from 'react';
import firebase from 'firebase';
import { browserHistory, Link } from 'react-router';
import { Form } from './Form';

export class Register extends React.Component {

	componentWillMount() {
		firebase.auth().onAuthStateChanged(function(user){
			if(user){
				browserHistory.push('/');
			}
		});
	}

	register(email, password){
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // ...
		});
	}

	render(){
		return(
		<div>
			<h3>Register</h3>
			<Form 
				submit={(email, password) => this.register(email, password)}
			/>
			<li><Link to="/login">Login</Link></li>
		</div>

		);
	}
}
