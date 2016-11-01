var React = require('react');

var RoomDetails = React.createClass({
	statics: {
		hours: ['09:00', '10:00', '11:00']
	},
	getInitialState: function() {
			return {
				availability: {}
			};
		},
	componentWillMount: function() {
		$.ajax({
				url: '/roomAvail',
				type: 'GET',
				dataType: 'json',
				data: {roomNumber: this.props.roomID}
			})
			.done(function(result) {
				console.log("success");
			}.bind(this))
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
				
	},
	render: function() {
		var hours = RoomDetails.hours.map((hour) => {
			return (<li>{hour}</li>)
		});
		console.log(RoomDetails.hours, hours);

		return (
			<div>
				The Details for room {this.props.roomID}! :D
				<ol>{hours}</ol>
			</div>
		);
	}

});

module.exports = RoomDetails;