var LoginForm = require('./LoginForm.js');
var MessageBox = require('./MessageBox.js');

var LoginBox = React.createClass({
	getInitialState: function() {
		return {
			messages: []
		};
	},
	handleError: function (message) {
		var newMessages = this.state.messages.concat([{class: "error", text: message}]);
		this.setState({
			messages: newMessages
		});
	},
	render: function() {
		return (
			<div>
				<MessageBox data={this.state.messages} />
				<LoginForm handleError={this.handleError} />
			</div>
		);
	}

});

module.exports = LoginBox;