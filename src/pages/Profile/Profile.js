import React, { Component } from "react";
import "./Profile.css";
import { Row, Col } from 'react-materialize';
import { FormBtn } from "../../components/Form";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import { Redirect } from "react-router";
// import { AuthContext, AuthProvider, AuthConsumer } from "../../Auth.js";

class Profile extends Component {
  // handleAuth = event => {
  //   const { currentUser } = useContext(AuthContext);

  state = {
    username: "",
    password: ""
  };


  // setState when inputs recieve keystrokes
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When form is submitted
  handleFormSubmit = event => {
    alert("add message logic ya dingus")
  };


  // Render Page 
  render() {
    return (
      <div className="profilebackground" >
        <Navbar />
        <main>
          <div className="Picandname">
            <Row id="userInfoContainer">
              <Col s={4}>
                <img className="Profilepic" alt="" src={"./PlaceholderProfilePic.jpg"} />
              </Col>
              <Col s={6} id="userInfoText">
                <p className="Profilename">Name</p>
                <p className="Profilebio"> Super sick bio dude </p>
              </Col>
            </Row>
            <div id="messageButton">
              <FormBtn
                onClick={this.handleFormSubmit} id="Message">
                Message
            </FormBtn>
            </div>
            <div id="vidContainer">
              <div>
                <h3 id="myVideosText">My Videos</h3>
              </div>
              <div id="userVideos">
                <img className="video" alt="" src={"./vidPlaceholder.png"} />
                <img className="video" alt="" src={"./vidPlaceholder.png"} />
                <img className="video" alt="" src={"./vidPlaceholder.png"} />
              </div>
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
