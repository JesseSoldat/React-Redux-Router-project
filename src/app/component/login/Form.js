import React from 'react';


export class Form extends React.Component {

	constructor(props) {
		super();
		this.state = {
			email: '',
			password: ''
		}

		this.onChangeEmail = this.onChangeEmail.bind(this);

		this.onChangePassword = this.onChangePassword.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
		
	}

	onChangeEmail(e){
		this.setState({email: e.target.value});
		
	}

	onChangePassword(e){
		this.setState({password: e.target.value});
	
	}

	handleSubmit(e){
		e.preventDefault();
		let email = this.state.email;
		let password = this.state.password;
		this.props.submit(email, password);
	}

	render(){
		return(
		<form onSubmit={this.handleSubmit}>
			<input 
				onChange={this.onChangeEmail}
				value={this.state.email}
				placeholder="Email"/>
			<input 
				onChange={this.onChangePassword}
				value={this.state.password}
				placeholder="Password"
				/>
			<button>Submit</button>
		</form>
		);
	}
}