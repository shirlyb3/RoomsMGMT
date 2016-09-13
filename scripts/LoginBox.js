var LoginBox = React.createClass({
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
	handleSubmit:function (e) {
		
	},
	render: function() {
		return (
			<form>
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
			</form>
		);
	}

});

module.exports = LoginBox;