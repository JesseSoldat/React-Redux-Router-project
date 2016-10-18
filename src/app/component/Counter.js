import React from 'react';

export default class Counter extends React.Component {
	render(){
		return(
		<div>
			<div className="row">

				<div className="col-xs-2">
					<h3>Count:{this.props.count} </h3>
					
				</div>
				<div className="col-xs-3">
					<button 
					onClick={ () => this.props.minus()}
					className="btn btn-danger">
					-
					</button>
					<button 
						onClick={() => this.props.plus()}
						className="btn btn-success">
					+
					</button>
				</div>
			</div>
		</div>
		);
	}
}