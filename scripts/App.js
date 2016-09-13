import { Router, Route, hashHistory } from 'react-router';
var SignUpBox = require('./SignUpBox.js');
var LoginBox = require('./LoginBox.js');

var App = React.createClass({

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
    <Route path="/signUp" component={SignUpBox}/>
    <Route path="/login" component={LoginBox} />
  </Router>
), document.getElementById('app'))