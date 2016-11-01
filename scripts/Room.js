var RoomDetails = require('./RoomDetails.js');

var Room = React.createClass({
	getInitialState: function() {
		return {
			showDetails: false
		};
	},
	handleResevation: function () {
		var newShowDetails = !this.state.showDetails;
		this.setState({showDetails: newShowDetails});
	},
	render: function() {
		return (
			<div>
				{this.props.room.name} <br />
				{this.props.room.location}, 
				capacity: {this.props.room.capacity}<br />
				<button onClick={this.handleResevation}>Reserve</button>
				{this.state.showDetails ? <RoomDetails roomID = {this.props.room.id}/> : null }
			</div>
		);
	}

});

module.exports = Room;