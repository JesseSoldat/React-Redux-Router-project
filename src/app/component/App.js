import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import {Link, IndexLink } from 'react-router';
import { Nav } from './Nav';
import Counter from './Counter';

class App extends React.Component {

	constructor(props) {
		super(props);
	
	}

	render() {
		return (
		<div className="container">
			<Nav/>
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