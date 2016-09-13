var MessageBox = React.createClass({
	render: function() {
		var messagesNode = this.props.data.map(function(message,i) {
			return (
				<div key={i} className={message.class}>{message.text}</div>
			);
		});
		return (
			<div>
				{messagesNode}
			</div>
		);
	}

});

module.exports = MessageBox;