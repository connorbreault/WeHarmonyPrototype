import React, { Component, useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../base.js";
import { AuthContext } from "../../Auth.js";
import { Input } from "../../components/Form";
import { Link } from "react-router-dom";
import "./Login.css"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        alert(`You're logged in!`)
        history.push("/Home");
      } catch (error) {
        console.log(error);
      }
    }, [history],
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/Home" />;
  }

  const state = {
    email: "",
    password: ""
  };

  // setState when inputs recieve keystrokes
  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When form is submitted
  // const handleFormSubmit = event => {
  //   // event.preventDefault();
  //   alert(`Email: ${this.state.email} --- Password: ${this.state.password}`)
  // };


  // Render Page
  // render() {
  return (
    <div className="loginbackground" >
      <div className="container">
        <h1 className="logo">WeHarmony</h1>
        <div className="loginbox">
          <h1 className="logintext">Log in</h1>
          <Input
            value={state.email}
            // onChange={handleInputChange}
            name="email"
            placeholder="email"
          />
          <Input
            value={state.password}
            // onChange={handleInputChange}
            name="password"
            placeholder="password"
          />
          <Link to="/Signup"><button className="btn" id="Signup">Sign up</button></Link>
          <Link><button onClick={handleLogin} className="btn" id="Login">Login</button></Link>

          {/* <FormBtn
              onClick={this.handleFormSubmit} id="Login">
              Login
            </FormBtn> */}

        </div>
      </div>
    </div>
  );
  // }
};
export default withRouter(Login);