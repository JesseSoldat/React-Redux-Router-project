import React from 'react';
import { connect } from 'react-redux';


class App extends React.Component {
	render() {
		return (
		<div className="container">
			<h1>APP</h1>
			<button>+</button>
			<button>-</button>
		</div>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		like: state.likeReducer
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