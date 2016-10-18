import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {Link, IndexLink } from 'react-router';
import Counter from './Counter';

class App extends React.Component {

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

	render() {
		return (
		<div className="container">
			<h1>APP</h1>
			<li><Link to="/login">Login</Link></li>
			<li><Link to="#"
				onClick={this.logout}>Logout</Link></li>
			<hr/>
			<Counter count={this.props.likeCounter.results} plus={() => this.props.like(1)} 
				minus={() => this.props.dislike(1)}
			/>
		</div>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		likeCounter: state.likeReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		like: (number) => {
			dispatch({
				type: "LIKE",
				payload: number
			});
		},

		dislike: (number) => {
			dispatch({
				type: "DISLIKE",
				payload: number
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);