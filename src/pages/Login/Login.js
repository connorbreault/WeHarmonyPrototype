import React, { Component } from "react";
import "./Login.css"
import { Input, FormBtn } from "../../components/Form";
import { Link } from "react-router-dom";


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
    event.preventDefault();
    if (this.state.username && this.state.password) {
      console.log(`Name: ${this.state.username} --- Password: ${this.state.password}`)
    }
  };

  render() {
    return (
      <div className="background" >
        <div className="container">
          <h1 className="logo">WeHarmony</h1>
          <div className="loginbox">
            <h1 className="logintext">Log in</h1>
            <Input
              value={this.state.username}
              onChange={this.handleInputChange}
              name="username"
              placeholder="username (required)"
            />
            <Input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              placeholder="password (required)"
            />
            <FormBtn
              onClick={this.handleFormSubmit}>
              Login
            </FormBtn>
            <Link to="/Signup"><button className="btn" style={{ float: "left", marginBottom: 10 }}>Sign up</button></Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;