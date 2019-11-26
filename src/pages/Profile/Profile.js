import React, { Component } from "react";
import "./Profile.css";
import { Row, Col } from 'react-materialize';
import { Modal, Button } from 'react-materialize';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Input } from "../../components/Form";
// import { FormBtn } from "../../components/Form";
// import { Redirect } from "react-router";
// import { AuthContext, AuthProvider, AuthConsumer } from "../../Auth.js";
// import YouTube from 'react-youtube';

const trigger = <Button id="modalTarget">Edit Profile</Button>;
class Profile extends Component {
  // handleAuth = event => {
  //   const { currentUser } = useContext(AuthContext);

  state = {
    videoId: ""
  };

  // setState when inputs recieve keystrokes
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When form is submitted
  handleEditProfile = event => {
    alert("add edit logic ya dingus")
  };

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

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
              <Col s={8} id="userInfoText">
                <p className="Profilename">Name</p>
                <p className="Profilebio"> Super sick bio dude </p>
              </Col>
            </Row>
            <div>

              <Modal header="" trigger={trigger}>
                <h2 id="editProfileText">Edit Profile</h2>
                <h3 className="modalHeaders"> Change Profile Pic: </h3>
                <Button className="modalBtns">Browse</Button>
                <hr />
                <h3 className="modalHeaders"> Add videos:</h3>
                <h5>Step 1: Upload to youtube</h5>
                <h5>Step 2: Add video id(as shown in picture) below!</h5>
                <img className="howToimg" alt="" src={"./howTo.png"} />
                <h4 className="modalHeaders">Add video id here:</h4>
                <Input value={this.state.videoId} onChange={this.handleInputChange} name="videoId" placeholder="Video ID" />
              </Modal>

            </div>
            <div id="vidContainer">
              <div>
                <h3 id="myVideosText">My Videos</h3>
              </div>
              <div id="userVideos">
                <h3>Add videos in "Edit Profile" section!</h3>
                {/* VIDEOS WILL BE MAPPED FROM LOGGED IN USER HERE */}
                {/* <YouTube
                  className="youtubeVid"
                  videoId="yV5WKvNZ_6g"
                  opts={opts}
                  onReady={this._onReady}
                />
                <YouTube
                  className="youtubeVid"
                  videoId="KKBkVH06ehY"
                  opts={opts}
                  onReady={this._onReady}
                /> */}
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
