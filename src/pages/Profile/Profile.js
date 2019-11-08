import React, { Component } from "react";
import "./Profile.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

class Profile extends Component {
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
    if (this.state.username.length > 0 && this.state.password > 0) {
      console.log(`Name: ${this.state.username} --- Password: ${this.state.password}`)
    } else {
      // event.preventDefault()
      // alert("Fill out the form please")
    }
  };

  render() {
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
  }
}
export default Profile;
