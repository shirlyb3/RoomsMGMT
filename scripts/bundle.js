(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var UserSignUpForm = require("./UserSignUpForm.js");

var LoginBox = React.createClass({
	displayName: "LoginBox",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(UserSignUpForm, { url: "/userTypes" })
		);
	}

});

ReactDOM.render(React.createElement(LoginBox, null), document.getElementById("loginForm"));

},{"./UserSignUpForm.js":2}],2:[function(require,module,exports){
"use strict";

var UserSignUpForm = React.createClass({
	displayName: "UserSignUpForm",

	getInitialState: function getInitialState() {
		return {
			userTypes: [],
			userId: "shirly",
			userPassword: "123456",
			userType: "admin",
			userName: "Tom",
			userEmail: "example@hi.com"
		};
	},
	componentDidMount: function componentDidMount() {
		$.ajax({
			url: this.props.url,
			dataType: "json",
			cache: false,
			success: function (data) {
				this.setState({ userTypes: data });
			}.bind(this),
			error: function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	handleNewUserSubmit: function handleNewUserSubmit(e) {
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
			success: function success(data, status) {},
			error: function error(xhr, status, err) {
				console.log(err.toString());
			}
		});
	},
	handleUserChange: function handleUserChange(e) {
		this.setState({
			userId: e.target.value
		});
	},
	handlePasswordChange: function handlePasswordChange(e) {
		this.setState({
			userPassword: e.target.value
		});
	},
	handleNameChange: function handleNameChange(e) {
		this.setState({
			userName: e.target.value
		});
	},
	handleEmailChange: function handleEmailChange(e) {
		this.setState({
			userEmail: e.target.value
		});
	},
	handleTypeChange: function handleTypeChange(e) {
		this.setState({
			userType: e.target.selected
		});
	},
	render: function render() {
		var userTypeOptions = this.state.userTypes.map(function (type) {
			return React.createElement(
				"option",
				{ key: type.key },
				type.value
			);
		});
		return React.createElement(
			"form",
			null,
			React.createElement("input", {
				type: "text",
				value: this.state.userId,
				onChange: this.handleUserChange,
				placeholder: "Choose a user name" }),
			React.createElement("input", {
				type: "password",
				value: this.state.userPassword,
				onChange: this.handlePasswordChange,
				placeholder: "Password" }),
			React.createElement("input", {
				type: "text",
				value: this.state.userName,
				onChange: this.handleNameChange,
				placeholder: "Whats your name?" }),
			React.createElement("input", {
				type: "email",
				value: this.state.userEmail,
				onChange: this.handleEmailChange,
				placeholder: "Do you have an email?" }),
			React.createElement(
				"select",
				{
					value: this.state.userType,
					onChange: this.handleTypeChange },
				userTypeOptions
			),
			React.createElement("input", {
				type: "submit",
				value: "Sign Up",
				onClick: this.handleNewUserSubmit })
		);
	}
});

module.exports = UserSignUpForm;

},{}]},{},[1]);
