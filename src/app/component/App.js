import React from 'react';
import { connect } from 'react-redux';
import {Link, IndexLink } from 'react-router';
import Counter from './Counter';

class App extends React.Component {
	render() {
		return (
		<div className="container">
			<h1>APP</h1>
			<li><Link to="/login">Login</Link></li>
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