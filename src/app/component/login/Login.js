import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { browserHistory, Link } from 'react-router';
import { Form } from './Form';

class Login extends React.Component {

	componentWillMount() {
		firebase.auth().onAuthStateChanged(function(user){
			if(user){
				browserHistory.push('/');
			}
		});
	}

	login(email, password){
		firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
			  var errorCode = error.code;
			  var errorMessage = error.message;
		});
	}

	render(){
		return(
		<div>
			<h3>Login</h3>
			<Form email={this.props.credentials.email}
				password={this.props.credentials.password}
				submit={(email, password) => this.login(email, password)}
			/>
			<li><Link to="/register">Register</Link></li>
		</div>

		);

	}
}

const mapStateToProps = (state) => {
	return {
		credentials: state.loginReducer
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (emailPass) => {
			dispatch({
				type: "LOGIN",
				payload: emailPass
			});
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);