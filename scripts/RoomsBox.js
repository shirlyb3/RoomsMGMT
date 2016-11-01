var Room = require('./Room.js');

var RoomsBox = React.createClass({
	getInitialState: function() {
		return {
			rooms: []
		};
	},
	componentWillMount: function() {
		$.ajax({
			url: '/roomsList',
			dataType: 'json',
			success: function(result) {
						this.setState({
							rooms: result
						});
					}.bind(this),
			error: function() {
						console.log("error");
					}
			});	
	},
	handleResevation: function (roomId) {
		console.log("The ID of the chosen room is " + roomId);
	},
	render: function() {
		var rooms = this.state.rooms.map(function (room) {
			return (<Room key={room.id} room={room} />);
		}.bind(this));
		return (
			<ul className="roomsList">
				{rooms}
			</ul>
		);
	}

});

module.exports = RoomsBox;