import React, { useCallback, useContext } from "react";
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

  // const state = {
  //   email: "",
  //   password: ""
  // };

  // setState when inputs recieve keystrokes
  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // Render Page
  return (
    <div className="loginbackground" >
      <div className="container">
        <img src={"./LogoWhite.png"} alt="logo" className="logo" />
        <div className="loginbox">
          <h1 className="logintext">Log in</h1>
          <form onSubmit={handleLogin}>
            <label>
              <Input
                name="email"
                placeholder="email"
                type="email"
              />
            </label>
            <label>
              <Input
                name="password"
                placeholder="password"
                type="password"
              />
            </label>
            <Link to={`/Signup`} ><button className="btn" id="Signup">Sign up</button></Link>
            <button type="submit" className="btn" id="Login">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Login);