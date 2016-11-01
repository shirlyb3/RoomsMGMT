import { hashHistory } from 'react-router';

var LoginForm = React.createClass({
	getInitialState: function() {
		return {
			userName: "",
			password: "" 
		};
	},
	handleUserNameChange: function (e) {
		this.setState({
			userName: e.target.value
		});
	},
	handlePasswordChange: function (e) {
		this.setState({
			password: e.target.value
		});
	},
	handleSubmit: function (e) {
		e.preventDefault();
		$.ajax({
			url: '/login',
			type: 'POST',
			data: {
				userId: this.state.userName,
				password: this.state.password
			},
			success: function (result, status, xhr) {
				//this.props.handleUserLogin();
				hashHistory.push('/');
			}.bind(this),
			error: function (err, status, xhr) {
				//console.log(err);
				this.props.handleError(err.responseText);
			}.bind(this)
		})
	},
	render: function() {
		return (
			<form id="login-form">
				<input
					placeholder="User Name"
					value={this.state.userName}
					onChange={this.handleUserNameChange}/>
				<input
					type="password"
					placeholder="Password"
					value={this.state.password}
					onChange={this.handlePasswordChange}/>
				<input
					type="submit"
					onClick={this.handleSubmit}/>
				or <a href="#/signUp">Sign Up</a>
			</form>
		);
	}

});

module.exports = LoginForm;