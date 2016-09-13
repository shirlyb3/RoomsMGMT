var UserSignUpForm = require("./UserSignUpForm.js");
var MessageBox = require("./MessageBox.js");
import { Router, Route, Link } from 'react-router';

var SignUpBox = React.createClass({
	getInitialState: function() {
		return {
			messages: []
		};
	},
	handleError: function (error) {
		var newMessages = this.state.messages.concat([{class: "error", text: error}]);
		this.setState({
			messages: newMessages
		});
	},
	handleSuccess: function (userName) {
		var newMessages = this.state.messages.concat([{class: "info", text: "User " + userName + " created successfully"}])
		this.setState({
			messages: newMessages
		});
	},
	clearMessages: function () {
		this.setState({
			messages: []
		});
	},
	render: function() {
		return (
			<div>
				<MessageBox data={this.state.messages}/>
				<UserSignUpForm url="/userTypes" 
								handleError={this.handleError} 
								handleSuccess = {this.handleSuccess}
								clearMessages={this.clearMessages}
								/>	
			</div>
		);
	}

});

module.exports = SignUpBox;