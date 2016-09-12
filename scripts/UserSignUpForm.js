var UserSignUpForm = React.createClass({
	getInitialState: function () {
		return {
			userTypes: [],
			userId: "shirly",
			userPassword: "123456",
			userType: "admin",
			userName: "Tom",
			userEmail: "example@hi.com"
		};
	},
	componentDidMount: function () {
		$.ajax({
			url: this.props.url,
			dataType: "json",
			cache: false,
			success: function (data) {
				this.setState({userTypes: data});
			}.bind(this),
			error: function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	handleNewUserSubmit: function (e) {
		e.preventDefault();
		$.ajax({
				url: "/newUser",
				type: "POST",
				dataType: "json",
				data: {
					userId: this.state.userId,
					password: this.state.userPassword,
					type: this.state.userType,
					name: this.state.userName,
					email: this.state.userEmail
				},
				success: function (data, status) {
					
				},
				error: function (xhr, status, err) {
					console.log(err.toString());
				}
			});	
	},
	handleUserChange: function (e) {
		this.setState({
			userId: e.target.value
		});
	},
	handlePasswordChange: function (e) {
		this.setState({
			userPassword: e.target.value
		});
	},
	handleNameChange: function (e) {
		this.setState({
			userName: e.target.value
		});
	},
	handleEmailChange: function (e) {
		this.setState({
			userEmail: e.target.value
		});
	},
	handleTypeChange: function (e) {
		this.setState({
			userType: e.target.selected
		});
	},
	render: function () {
		var userTypeOptions = this.state.userTypes.map(function (type) {
			return (<option key={type.key}>{type.value}</option>);
		});
		return (
			<form>
				<input 
					type="text" 
					value={this.state.userId} 
					onChange={this.handleUserChange}
					placeholder="Choose a user name" />

				<input
					type="password" 
					value={this.state.userPassword} 
					onChange={this.handlePasswordChange} 
					placeholder="Password" />

				<input 
					type="text" 
					value={this.state.userName} 
					onChange={this.handleNameChange} 
					placeholder="Whats your name?" />
				
				<input 
					type="email" 
					value={this.state.userEmail} 
					onChange={this.handleEmailChange} 
					placeholder="Do you have an email?" />

				<select 
					value={this.state.userType} 
					onChange={this.handleTypeChange} >
						{userTypeOptions}
				</select>

				<input
					type="submit"
					value="Sign Up"
					onClick={this.handleNewUserSubmit}/>
			</form>
			);
	}
});

module.exports = UserSignUpForm;