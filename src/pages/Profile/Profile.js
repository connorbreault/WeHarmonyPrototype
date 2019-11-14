import React, { Component, useCallback, useContext } from "react";
import { Redirect } from "react-router";
import "./Profile.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../Auth.js";

const Profile = () => {

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/Profile" />;
  }
  // class Profile extends Component {

  // state = {
  //   username: "",
  //   password: ""
  // };

  // // setState when inputs recieve keystrokes
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // // When form is submitted
  // handleFormSubmit = event => {
  //   if (this.state.username.length > 0 && this.state.password > 0) {
  //     console.log(`Name: ${this.state.username} --- Password: ${this.state.password}`)
  //   } else {
  //     // event.preventDefault()
  //     // alert("Fill out the form please")
  //   }
  // };


  // Render Page 
  // render() {
  return (
    <div className="profilebackground" >
      <Navbar />
      <main>
        <div className="Picandname container">
          <div className="row"></div>
          <div className="col-6">
            <img className="Profilepic" alt="" src="../../images/placeholder.png"></img>
          </div>
          <div className="col-6">
            <p className="Profilename">(props.name)'s Profile</p>
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
  // }
}
export default Profile;
