import React, { Component } from "react";
import { Input } from "../../components/Form";
import { Link } from "react-router-dom";
import firebase from 'firebase';
import "./Login.css"

firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    // event.preventDefault();
    alert(`Email: ${this.state.email} --- Password: ${this.state.password}`)
  };

  render() {
    return (
      <div className="loginbackground" >
        <div className="container">
          <h1 className="logo">WeHarmony</h1>
          <div className="loginbox">
            <h1 className="logintext">Log in</h1>
            <Input
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              placeholder="email"
            />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="password"
            />
            <Link to="/Signup"><button className="btn" id="Signup">Sign up</button></Link>
            <Link to="/Home"><button onClick={this.handleFormSubmit} className="btn" id="Login">Login</button></Link>
            {/* <FormBtn
              onClick={this.handleFormSubmit} id="Login">
              Login
            </FormBtn> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Login;