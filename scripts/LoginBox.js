var UserSignUpForm = require("./UserSignUpForm.js");

var LoginBox = React.createClass({
	render: function() {
		return (
			<div>
				<UserSignUpForm url="/userTypes"/>
				
			</div>
		);
	}

});

ReactDOM.render(<LoginBox />,
	document.getElementById("loginForm"));