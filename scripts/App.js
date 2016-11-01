import { Router, Route, hashHistory } from 'react-router';
var SignUpBox = require('./SignUpBox.js');
var LoginBox = require('./LoginBox.js');
var RoomsBox = require('./RoomsBox.js');

var App = React.createClass({
	getInitialState: function() {
		return {
			user: {}
		};
	},
	handleUserLogin: function () {
		console.log("hi :)");
	},
	render: function() {
		return (
			<div>
				HI!
			</div>
		);
	}

});

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/signUp" component={SignUpBox} />
    <Route path="/login" component={LoginBox} />
    <Route path="/rooms" component={RoomsBox} />
  </Router>
), document.getElementById('app'))