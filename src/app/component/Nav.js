import React from 'react';
import firebase from 'firebase';
import { Link } from 'react-router';
export class Nav extends React.Component {

	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
	}

	logout(){
		firebase.auth().signOut().then(function() {
          // Sign-out successful.
        }, function(error) {
          // An error happened.
        });
	}

	render(){
		return(
		<div id="NavContainer">
			<li><Link to="/">Home</Link></li>
			<li><Link to="/game">Game</Link></li>
			<li><Link to="/login">Login</Link></li>
			<li><Link to="#"
			onClick={this.logout}>Logout</Link></li>
			<hr/>
		</div>
		)
	}
}