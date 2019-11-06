import React, { Component } from "react";
import { Input } from "../../components/Form";
import { Link } from "react-router-dom";
import "./Login.css"


class Login extends Component {
  state = {
    username: "",
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
    alert(`Username: ${this.state.username} --- Password: ${this.state.password}`)
  };

  render() {
    return (
      <div className="loginbackground" >
        <div className="container">
          <h1 className="logo">WeHarmony</h1>
          <div className="loginbox">
            <h1 className="logintext">Log in</h1>
            <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="username"
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